import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getPostulant(id){

    const postulant = await prisma.postulants.findUnique({
        where: {
            idPostulant: parseInt(id)
        },
        include: {
            workSubjects:{
                select: {
                    WorkSubject: true
                }
            },
            ContractType_ContractTypeToPostulants:{
                select: {
                    WType: true
                }
            },
        }
    })
    return postulant;
}