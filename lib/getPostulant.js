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
            HighType_HighTypeToPostulants:{
                select: {
                    HighType: true
                }
            },
            SalaryState:{
                select: {
                    Salary: true
                }
            },
            WorkPreference_PostulantsToWorkPreference:{
                select: {
                    WPreference: true
                }
            },
            WorkState:{
                select: {
                    WorkState: true
                }
            },
            Departments_DepartmentsToPostulants_RDepartment:{
                select: {
                    Department: true
                }
            },
        }
    })
    return postulant;
}