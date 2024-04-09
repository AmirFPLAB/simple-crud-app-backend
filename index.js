const express = require('express')
const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// middleware


const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')

mongoose.connect('mongodb+srv://Amirhossein_mngdb:bC1CRJiGfK2VPezw@backenddb.stzr1zv.mongodb.net/Node_API?retryWrites=true&w=majority&appName=BackendDB').then(() => {
  console.log('Connected to database!')
  app.listen(3000, () => {
    console.log('Server is running in the port 3000')
  })
}).catch(() => {
  console.log('Connection failed')
})

// app.get('/', (req, res) => {
//   res.send('Hello from the GET Node API')
// })

//routes
app.use('/api/products', productRoute)

