const express = require('express');
const admin_route = express.Router(); 
const productController = require('../controller/productController'); 

admin_route.post('/product/add', productController.addProduct);
admin_route.put('/product/edit/:id', productController.editProduct);
admin_route.patch('/product/block/:id', productController.blockProduct);


module.exports = admin_route;
