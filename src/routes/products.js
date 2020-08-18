const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/productsController')

router.get('/', ProductsController.getProducts)

module.exports = router;