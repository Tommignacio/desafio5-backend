import { Router } from 'express'
//import { productApi } from '../routes/product.routes.js'
const router = Router()

router.get('/', (req, res) => {
    res.render('realTimeProducts', { layout: 'main' })
})

export default router
