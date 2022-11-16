'use strict'

/**
 * order-item controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
  'api::order-item.order-item',
  ({ Strapi }) => ({
    async create (ctx) {
      const item = ctx.request.body.data
      // some logic here
      const response = await strapi.entityService.create(
        'api::order-item.order-item',
        {
          data: {
            quantity: item.quantity,
            orderId: item.orderId,
            user_id: item.userId,
            product_id: item.productId,
            publishedAt: new Date()
          }
        }
      )

      return response
    }
  })
)
