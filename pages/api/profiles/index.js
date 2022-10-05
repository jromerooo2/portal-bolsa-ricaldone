import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const data = JSON.parse(req.query.info);
        const postulant = await prisma.postulants.findMany({
            where: {
                OR: [
                    {
                        WSubject: data.wsubj,
                    },
                    { 
                        Salary: data.salary,
                    },
                    {
                        ContractType: data.contract_type,
                    },
                    {
                        IDepartment: data.depa,
                    }
                  ]
            },
        })
        return res.send(postulant);

    } catch (err) {
      res.status(500).json({ err: err });
    }


  

};