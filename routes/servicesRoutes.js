import express from 'express'
import { getServices, getServicesById, createService, updateService, deleteService } from '../controllers/servicesController.js'

const router = express.Router()



router.route('/')
    .post(createService)    
    .get(getServices)

router.route('/:id')
    .get( getServicesById )
    .put( updateService)
    .delete( deleteService)

export default router
