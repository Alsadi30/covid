module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/custom',
      handler: 'order.exampleAction',
      config: {
        // auth: false
      }
    }
  ]
}
