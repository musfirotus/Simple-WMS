const express = require('express');
const router = express.Router();

const ProductsInController = require('../controllers/productsInController')

router
  .get('/', ProductsInController.getProductsIn)
  .get('/:id', ProductsInController.getProductIn)
  .post('/', ProductsInController.saveProductIn)
  .put('/:id', ProductsInController.updateProductIn)
  .delete('/del/:id', ProductsInController.deleteProductIn)

module.exports = router;