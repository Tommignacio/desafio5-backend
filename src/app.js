import express from 'express'
import morgan from 'morgan'
import router from './routes/index.routes.js'
import { PORT } from './utils/env.config.js'
import { engine } from 'express-handlebars'
import { Server as ioServer } from 'socket.io'
import http from 'http'
import { productApi } from './routes/product.routes.js'

const app = express()
const httpServer = http.createServer(app) //creo servidor http
export const io = new ioServer(httpServer) //creo servidor io Websocket

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        defaultLayout: 'main.hbs',
        layoutsDir: process.cwd() + '/src/views/layouts',
    })
)
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'hbs')

app.use(express.static(process.cwd() + '/src/public'))

//ruta
app.use('/', router)

//connection socket
io.on('connection', async socket => {
    socket.emit('products', await productApi.getAll())
    console.log('usario conected!!!')
})

const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})

connectedServer.on('error', error => {
    console.error('Error: ', error)
})
