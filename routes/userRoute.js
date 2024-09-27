const express = require('express')
const user_route = express()
const productController = require('../controller/productController'); 

user_route.get('/product', productController.getAllProducts);
user_route.get('/product/:id', productController.getProduct);



module.exports = user_route