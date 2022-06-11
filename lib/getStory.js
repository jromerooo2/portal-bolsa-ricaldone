import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getStory(id){

    const story = await prisma.moderations.findMany({
        where: {
            idUserSystem: parseInt(id)
        },
        include: {
            Postulants:{
                select: {
                    idPostulant: true,
                    namePostulant: true,
                    lastName: true,
                    photoPostulant: true
                }
            }
        }
    })
    return story;
}