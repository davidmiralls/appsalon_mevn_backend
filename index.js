//const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'


//variables de entorno
dotenv.config()

// configurar la app

const app = express()

// leer datos via body

app.use(express.json())

// conectar a BD

db()


//definir una ruta
app.use('/api/services', servicesRoutes)



//definir puerto
const PORT = process.env.PORT || 4000


//arrancar la app
app.listen(PORT, () => {
    console.log(colors.blue( 'El servidor se está ejecutando en el puerto:', PORT))

})

