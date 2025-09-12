
import { parse, formatISO, startOfDay, endOfDay, isValid }  from 'date-fns'
import Appointment from '../models/Appointment.js'

const createAppointment = async (req,res)=>{  
    const appointment = req.body
    appointment.user = req.user._id.toString()

    
    try {
       
    const newAppointment = new Appointment(appointment)

    await newAppointment.save()
        res.json({
        msg: 'Tu reservación se realizó correctamente'})
      }catch(error) {
       console.log(error)
        
    }
}
const getAppointmentsByDate = async (req,res) => {
try {
    const { date } = req.query
    console.log(date)
   
    const newDate = parse( date, 'dd/MM/yyyy', new Date() )

      if(!isValid(newDate)){

    const error = new Error('Fecha no válida')
    return res.status(400).json({ msg: error.message })
            
      }

    const isoDate = formatISO(newDate)
     console.log(isoDate)
    
        const appointments = await Appointment.find({
           date:{
               $gte: startOfDay(new Date(isoDate)),
               $lte: endOfDay(new Date(isoDate))
            }
           }).select('time')
          
      res.json(appointments)
} catch (error) {
    console.log("error al obtener citas", error.message)
     return res.status(500).json({ message: "error interno del servidor"})
  }

}

export{
    createAppointment,
    getAppointmentsByDate
}
