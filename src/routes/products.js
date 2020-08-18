const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/productsController')

router
  .get('/', ProductsController.getProducts)
  .get('/:id', ProductsController.getProduct)
  .post('/', ProductsController.saveProduct)
  .put('/:id', ProductsController.updateProduct)
  .delete('/del/:id', ProductsController.deleteProduct)

module.exports = router;