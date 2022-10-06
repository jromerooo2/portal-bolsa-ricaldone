import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getRandomPostulants(datos)  {

  const data = datos;
    try {
        const postulant = await prisma.postulants.findMany({
            where: {
                OR: [
                    {
                        WSubject: data.wsubj,
                    },
                    { 
                        Salary: data.salary,
                    }
                  ],
            },
        })

        return postulant;

    } catch (err) {
      return err
    }


  

};