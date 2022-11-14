module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/confirm',
      handler: 'order.confirm',
      config: {
        // auth: false
      }
    }
  ]
}
