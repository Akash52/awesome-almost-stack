module.exports = {
  group: {
    prefix: '/pages',
    middleware: ['auth'],
  },
  routes: [
    {
      path: '/',
      method: 'get',
      handler: function (req, res) {
        res.send('Hello World !')
      },
    },
    {
      path: '/product',
      method: 'get',
      handler: function (req, res) {
        res.send('Product Page')
      },
    },
    {
      path: '/product/:id',
      method: 'get',
      handler: function (req, res) {
        res.send(`Product ${req.params.id}`)
      },
    },
  ],
}
