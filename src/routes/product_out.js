const express = require('express');
const router = express.Router();

const ProductsOutController = require('../controllers/productsOutController')

router.get('/', ProductsOutController.getProductsOut)

module.exports = router;