import Layout from "../../../components/layout"
import Link from "next/link";
import { PrismaClient } from "@prisma/client"
import axios from "axios";
import { useEffect,useState } from "react/cjs/react.production.min";
const prisma = new PrismaClient();


function profiles({profiles}){
    const dataUsers = JSON.parse(profiles);
    const usuario = false;
    return (
        <>
            <Layout user={usuario}>
                <h1 className="font-bold text-3xl p-8 text-center">Perfiles Disponibles</h1>
                <p className="text-center">
                    Bienvenido {usuario.nameUser}, aquí encontraras todos los perfiles disponibles para contratos. 
                </p>
                <div className="md:grid grid-cols-3">
                    {
                        dataUsers.map(user => (
                            <div key={user.idPostulant}>
                                <Link href={'/advanced/profiles/'+user.idPostulant} >
                                    <div key={user.userId} className="p-2 md:my-9 my-6 card cursor-pointer">
                                        <div className={`bg-white rounded-lg shadow-xl p-4 ${user.Alumni ? "border border-yellow-500":""}`}>
                                            <span className={`rounded p-2 bg-red-500 text-white absolute -mt-8 ${user.Alumni ? "":"hidden"}`}>Recomendado</span>
                                            <img src={user.img} alt={user.namePostulant} className="rounded h-36 mx-auto" />
                                            <h2 className="font-bold text-xl">{user.namePostulant +" "+ user.lastName}</h2>
                                            <p>{user.email}</p>
                                            <p>{user.phoneNumber}</p>
                                            <p>{user.emailAddress}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>                            

                        ))
                    }
                </div>            
            </Layout>
        </>
    )
}
export async function getServerSideProps({ req, res }) {

    //Logic for db querying
    const profiles = await prisma.Postulants.findMany();
    const jsonProfiles = JSON.stringify(profiles);
    return { props: {                    
                    profiles: jsonProfiles
                    } 
           }
}
export default profiles
