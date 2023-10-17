import { Router } from 'express'
import productRouter from './product.routes.js'
import cartRouter from './cart.routes.js'
import viewsRouter from './views.routes.js'
import viewsRealTimeRouter from './viewsRealTimeProducts.js'
/* Manejaremos las rutas desde aca, cada vez que agreguemos unna ruta, la importaremos aca */

const router = Router()

/******  API *****/
router.use('/api/products', productRouter)
router.use('/api/carts', cartRouter)

/******  views *****/
router.use('/', viewsRouter)
router.use('/realtimeproducts', viewsRealTimeRouter)

export default router //enviamos las rutas a app.js
