import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getPostulant(id){

    const postulant = await prisma.postulants.findUnique({
        where: {
            idPostulant: parseInt(id)
        },
        include: {
            WorkState:{
                select: {
                    WorkState: true,
                }
            },
        }
    })
    return postulant;
}