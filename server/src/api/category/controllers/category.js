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

      console.table(ctx.query.populate)
      console.table(ctx.query.filters)

      const entries = await strapi.entityService.findMany(
        'api::category.category',
        {
          populate: {
            products: {
              // sort: 'name:asc',
              populate: {
                variants: true,
                filters: {
                  id: {
                    $eq: 100
                  }
                }
              }
            }
          }
        }
      )

      console.log(entries)
      return entries
    }
  })
)
