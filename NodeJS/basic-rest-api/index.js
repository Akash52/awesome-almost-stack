import express from 'express'
const app = express() //Here we create app variable which store express Properties
import userRouters from './routes/users.js'

app.use(express.json()) //express to recognize the incoming Request Object as a JSON Object.
//This method is called as a middleware

//here we create our first GET request

app.get('/', (req, res) => {
  res.send({ name: 'Jhon', age: '20' })

  console.log('Data Fetch Successfully')
})

//Here We use our all routes

app.use('/users', userRouters)

const PORT = process.env.PORT || 5000

//Here We Create Simple Express Server

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
