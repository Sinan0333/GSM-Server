const express = require('express');
const admin_route = express.Router(); 
const productController = require('../controller/productController'); 
const authController = require('../controller/authController');
const {adminAuthMiddleware} = require("../middleware/adminAuthMiddleware");


admin_route.post("/auth/login", authController.adminLogin );
admin_route.get('/product',adminAuthMiddleware, productController.getAllProducts);
admin_route.get('/product/:id',adminAuthMiddleware, productController.getProduct);
admin_route.post('/product/add',adminAuthMiddleware, productController.addProduct);
admin_route.put('/product/edit/:id',adminAuthMiddleware, productController.editProduct);
admin_route.patch('/product/block/:id',adminAuthMiddleware, productController.blockProduct);


module.exports = admin_route;
