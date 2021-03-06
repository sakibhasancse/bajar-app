import express from 'express'
import { isAuth } from '../middleware/auth'
import { productImage } from '../services/Product/helper'
import productService from '../services/Product/product'
import { createProduct } from '../validator/product'
import { validate } from '../validator/validation'


const router = express.Router()

router.route('/product')
    .post(isAuth, productImage, productService.createProduct)
    .get(productService.allProducts)

router.route('/product/:slug')
    .put(isAuth, productService.updateProduct)
    .get(productService.singleproduct)
    .delete(isAuth, productService.deleteProduct)

export default router