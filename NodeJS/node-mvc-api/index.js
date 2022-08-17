const Server = require('./server')

const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World !')
// })

// app.get('/product', (req, res) => {
//   res.send('Product Page')
// })

const app = new Server(port)
app.start()

// app.listen(3000, () => {
//   console.log('App listening on port 3000!')
// })
