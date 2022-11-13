'use strict'

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
  'api::category.category',
  ({ Strapi }) => ({
    async custom (ctx) {
      // some custom logic here

      // console.table(ctx.query.populate)
      // console.table(ctx.query.filters)

      const entries = await strapi.entityService.findMany(
        'api::category.category',
        {
          populate: {
            products: {
              populate: {
                variants: true
              }
            }
          },
          filters: {
            products: {
              variants: {
                regular_price: {
                  $eq: 500
                }
              }
            }
          }
        }
      )

      return entries
    }
  })
)
