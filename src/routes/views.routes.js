import { Router } from 'express'
import { productApi } from '../routes/product.routes.js'
const router = Router()

router.get('/', async (req, res) => {
    let products = await productApi.getAll()
    let existProducts = false
    if (products.length > 0) existProducts = true
    res.render('home', { products, existProducts })
})

export default router
