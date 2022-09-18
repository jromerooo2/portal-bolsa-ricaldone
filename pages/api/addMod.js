import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = req.body;

  if(data.idPostulant !== null){
    try {

      // checking if the last mod is the same day
      let yourDate = new Date();

      const offset = yourDate.getTimezoneOffset()
      yourDate = new Date(yourDate.getTime() - (offset*60*1000))
      let finalDate = yourDate.toISOString().split('T')[0];
      finalDate = new Date(finalDate);
        
      const lastMod = await prisma.moderations.findMany({
        where: {
          AND: [
            // {dateMod: finalDate},
            {idPostulant: data.idPostulant},
            {idUserSystem: data.idUserSystem}
          ],
        },
      })

      (lastMod.length)
      
      if(lastMod.length === 0 || 
         lastMod.length === undefined ||
         lastMod.length === ""){
  
          const result = await prisma.moderations.create({
            data: {
              ...data,
            },
          });
  
          res.status("200").json(result);
          
        }else{
            
            res.status("400").json({ err: "Solo puedes solicitar la informacion del mismo postulante una vez." });
      }
    
    } catch (err) {
      res.status(500).json({ err: "Error occured while adding a new food." });
    }

  }else if(
    data.idPostulant === null
    ){

    try {
          const result = await prisma.moderations.create({
            data: {
              ...data,
            },
          });
  
          res.status("200").json(result);
          
    
    } catch (err) {
      res.status(500).json({ err: "Error occured while adding a new food." });
    }
  }

  

};