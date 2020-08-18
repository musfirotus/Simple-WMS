const express = require('express')
const app = express()
const port = 3000

const indexRoute = require('./src/routes/index')
const userRoute = require('./src/routes/users')
const productRoute = require('./src/routes/products')
const productInRoute = require('./src/routes/product_in')
const productOutRoute = require('./src/routes/product_out')

app.use('/', indexRoute)
app.use('/users', userRoute)
app.use('/products', productRoute)
app.use('/productsin', productInRoute)
app.use('/productsout', productOutRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})