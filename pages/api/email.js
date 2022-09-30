import { SMTPClient } from 'emailjs';
  
export default function handler(req, res) {
 
 const {email, subject,text,base64}=req.body;

 const client = new SMTPClient({
   user: process.env.mail,
   password: process.env.password,
   host: 'smtp.gmail.com',
   ssl:true
 });
 
 try{

    if(base64 === "" || base64 === undefined){
        client.sendAsync(
          {
            text: `${text}`,
            from: process.env.mail,
            to: email,
            subject: subject
          }
        )
    }else{
      client.sendAsync(
        {
          text: `${text}`,	
          from: process.env.mail,
          to: email,
          subject: subject,
          attachment: [
            {
              data: base64, encoded:true, name:"cv.pdf",type:"document/pdf"
            },
          ],
        }
      )
    }
   }
 catch(e){
   res.status(400).end(JSON.stringify({ message:"Error" }))
   return;
 }
 
 res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}