'use strict'

/**
 * address controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::address.address', ({ Strapi }) => ({
  async create (ctx) {
    const userId = ctx.state.user.id
    ctx.request.body.data.user_id = userId
    console.log(ctx.request.body)
    const response = await super.create(ctx)
    // some more logic
    return response
  }
}))
