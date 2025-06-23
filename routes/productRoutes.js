const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router
    .get('/products',productController.getProducts)
    .post('/products',productController.createProduct)
    .put('/products/:id',productController.updateProduct)
    .delete('/products/:id',productController.deleteProduct)


module.exports = { router };