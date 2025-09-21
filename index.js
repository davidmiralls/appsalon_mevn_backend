//const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'
import authRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import userRoutes from './routes/userRoutes.js'



//variables de entorno
dotenv.config()

// configurar la app

const app = express()

// leer datos via body

app.use(express.json())

// conectar a BD

db()

// configurar cors
const whitelist = process.argv[2] === '--postman' ? [process.env.FRONTEND_URL, undefined] : [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function(origin,callback){
       if(whitelist.includes(origin)){
        //permite la conexión
        callback(null,true)

       }else{
        //no permitir la conexión
         callback(new Error('Error de CORS'))
       }
}
}

app.use(cors(corsOptions))


//definir una ruta
app.use('/api/services', servicesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/users', userRoutes)



//definir puerto
const PORT = process.env.PORT || 4000


//arrancar la app
app.listen(PORT, () => {
    console.log(colors.blue( 'El servidor se está ejecutando en el puerto:', PORT))

})

