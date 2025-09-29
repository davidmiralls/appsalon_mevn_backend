import { createTransport } from "../config/nodemailer.js"; 

export async function sendEmailVerification({name,  email,  token}){
   const transporter = createTransport(

      process.env.EMAIL_HOST,
      process.env.EMAIL_PORT,
      process.env.EMAIL_USER,
      process.env.EMAIL_PASS
    
   )
// Enviar el email
const info= await transporter.sendMail({
    from: 'AppSalon <cuentas@appsalon.com',
    to: email,
    subject: "AppSalon-Confirma tu cuenta",
    text:  "AppSalon-Confirma tu cuenta",
    html: `<p>Hola. ${name}, confirma tu cuenta en AppSalon</p>
    <p>Tu cuenta está casi lista, solo debes confirmarla en el siguiente enlace</p>
    <a href="${process.env.FRONTEND_URL}/auth/confirmar-cuenta/${token}">Confirmar Cuenta</a>
    <p>Si tu no creaste esta cuenta puedes ignorar este mensaje</p>
    
    `
})
console.log('mensaje enviado', info.messageId)

}

export async function sendEmailPasswordReset({name,  email,  token}){
   const transporter = createTransport(

      process.env.EMAIL_HOST,
      process.env.EMAIL_PORT,
      process.env.EMAIL_USER,
      process.env.EMAIL_PASS
    
   )
// Enviar el email
const info= await transporter.sendMail({
    from: 'AppSalon <cuentas@appsalon.com',
    to: email,
    subject: "AppSalon-Restablece tu Password",
    text:  "AppSalon-Restablece tu Password",
    html: `<p>Hola. ${name}, has solicitado reestablecer tu password en AppSalon</p>
    <p>Sigue el siguiente enlace para generar un nuevo password</p>
    <a href="${process.env.FRONTEND_URL}/auth/olvide-password/${token}">Reestablecer Password</a>
    <p>Si tu no solicitaste ésto puedes ignorar este mensaje</p>
    
    `
})
console.log('mensaje enviado', info.messageId)

}