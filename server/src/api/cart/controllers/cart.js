'use strict'

/**
 * cart controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::cart.cart', ({ Strapi }) => ({
  async create (ctx) {
    // some logic here
    const response = await super.create(ctx)
    // some more logic
    return response
  },
  async update (ctx) {
    // some logic here
    const response = await super.update(ctx)
    // some more logic

    return response
  }
}))
