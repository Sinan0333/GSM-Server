const express = require('express');
const admin_route = express.Router(); 
const productController = require('../controller/productController'); 
const authController = require('../controller/authController');

admin_route.post("/auth/login",authController.adminLogin );
admin_route.get('/product', productController.getAllProducts);
admin_route.get('/product/:id', productController.getProduct);
admin_route.post('/product/add', productController.addProduct);
admin_route.put('/product/edit/:id', productController.editProduct);
admin_route.patch('/product/block/:id', productController.blockProduct);


module.exports = admin_route;
