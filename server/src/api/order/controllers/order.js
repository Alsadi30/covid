'use strict'
const stripe = require('stripe')(process.env.STRIPE_SK)

const DecimalToInt = number => parseInt(number * 100)
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create (ctx) {
    const { data } = ctx.request.body
    const user = ctx.state.user
    const BASE_URL = ctx.request.headers.origin || 'https://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: data.address
            },
            unit_amount: DecimalToInt(data.total_price)
          },
          quantity: 1
        }
      ],
      customer_email: user.email,
      mode: 'payment',
      success_url: `${BASE_URL}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: BASE_URL
    })

    //TODO Create Temp Order here

    const newOrder = await strapi.entityService.create('api::order.order', {
      data: {
        userId: user.id,
        address: data.address,
        sub_total: data.sub_total,
        total_price: data.total_price,
        discount: data.discount,
        delivery: false,
        status: 'unpaid',
        publishedAt: new Date(),
        transaction_id: session.id
      }
    })
    return { id: session.id, newOrder }
  },

  async confirm (ctx) {
    const { transaction_id } = ctx.request.body.data

    console.log('checkout_session', transaction_id)
    const session = await stripe.checkout.sessions.retrieve(transaction_id)
    console.log('verify session', session)

    if (session.payment_status === 'paid') {
      //Update order

      const entries = await strapi.entityService.findMany('api::order.order', {
        filters: {
          transaction_id: {
            $eq: transaction_id
          }
        }
      })
      entries[0].status = 'paid'

      const newOrder = await strapi.entityService.update(
        'api::order.order',
        entries[0].id,
        {
          data: entries[0]
        }
      )

      const payment = await strapi.entityService.create(
        'api::payment.payment',
        {
          data: {
            order: newOrder.id,
            type: 'ONLINE',
            status: true,
            transaction_id: session.id,
            publishedAt: new Date()
          }
        }
      )

      return newOrder
    } else {
      ctx.throw(
        400,
        "It seems like the order wasn't verified, please contact support"
      )
    }
  }
}))
