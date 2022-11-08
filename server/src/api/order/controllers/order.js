'use strict'

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async exampleAction (ctx) {
    try {
      ctx.body = 'ok'
    } catch (err) {
      ctx.body = err
    }
  }
}))
