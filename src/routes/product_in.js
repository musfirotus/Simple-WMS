const express = require('express');
const router = express.Router();

const ProductsInController = require('../controllers/productsInController')

router.get('/', ProductsInController.getProductsIn)

module.exports = router;