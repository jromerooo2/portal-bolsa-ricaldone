 
import { SMTPClient } from 'emailjs';
  
export default function handler(req, res) {
 
 const {email,Codigo}=req.body;

 const client = new SMTPClient({
   user: process.env.mail,
   password: process.env.password,
   host: 'smtp.gmail.com',
   ssl:true
 });
 
 try{

   client.sendAsync(
     {
       text: `Tu código de verificación es: ${Codigo}`,	
       from: process.env.mail,
       to: email,
       subject: 'Código de verificación Sacculum',
      
     }
     )
   }
 catch(e){
   res.status(400).end(JSON.stringify({ message:"Error" }))
   return;
 }
 
 res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}