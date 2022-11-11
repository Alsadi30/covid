module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/cartbyuser',
      handler: 'cart.getCart',
      config: {
        // auth: false
      }
    }
  ]
}
