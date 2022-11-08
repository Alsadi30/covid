module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/category',
      handler: 'category.custom',
      config: {
        auth: false
      }
    }
  ]
}
