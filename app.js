const express = require('express')
const app = express()
const port = 3000

const indexRoute = require('./src/routes/index')
const userRoute = require('./src/routes/users')
const productRoute = require('./src/routes/products')
const productInRoute = require('./src/routes/product_in')
const productOutRoute = require('./src/routes/product_out')

app.use('/api/v1', indexRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/in', productInRoute)
app.use('/api/v1/out', productOutRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})