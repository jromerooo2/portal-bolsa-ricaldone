import Layout from "../../../components/layout"
import Link from "next/link";
import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


function profiles({profiles}){
    const dataUsers = JSON.parse(profiles);
    const usuario = false;
    const [dataFiltered, setFilter] = useState([]);   
    const [query, setQuery] = useState("");
    
    const handleChange = () => {
        return dataUsers.filter((el) => el.namePostulant.toLowerCase().includes(query.toLowerCase()));

    }
    useEffect(() => {
        setFilter(handleChange());
    },[dataUsers])
    
    return (
        <>
            <Layout user={usuario}>
                <h1 className="p-8 text-3xl Font-bold text-center text-green-900">Perfiles Disponibles</h1>
                <p className="text-2xl text-center text-lime-900 Font">
                    Bienvenido{usuario.nameUser}, aquí encontraras todos los perfiles disponibles para contratos. 
                </p>
            <div class="flex text-center justify-center">
            <div class="input-wrapper border-2">
	                <input onChange={e => setQuery(e.target.value)} type="search" class="input" placeholder="Buscar por nombre" className="focus:border-0"/>

                <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
            </div>
            </div>
                <div className="grid-cols-3 md:grid">
                    {
                        dataFiltered.map(user => (
                            <div key={user.idPostulant}>
                                <Link href={'/advanced/profiles/'+user.idPostulant} >
                                    <div key={user.userId} className="p-2 my-6 cursor-pointer md:my-9 card text-lime-900">
                                        <div className={`bg-white rounded-lg shadow-xl p-4 ${user.Alumni ? "border border-yellow-500":""}`}>
                                            <span className={`rounded p-2 bg-red-500 text-white absolute -mt-8 ${user.Alumni ? "":"hidden"}`}>Recomendado</span>
                                            <img src={`data:image/jpeg;base64,${user.photoPostulant}`} alt={user.namePostulant} className="mx-auto rounded h-36" />
                                            <h2 className="text-xl text-center font-bold pt-2.5 Font">{user.namePostulant +" "+ user.lastName}</h2>
                                            <p className="text-lg text-center Font">{user.mailPostulant}</p>
                                            {/* <p>{user.phoneNumber}</p>
                                            <p>{user.emailAddress}</p> */}
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
    const profiles = await prisma.Postulants.findMany({
        select: {
            idPostulant: true,
            namePostulant: true,
            photoPostulant: true,
            Alumni: true,
            lastName: true,
            mailPostulant: true
          }
    });
    //TODO: fetch state to show according to design
    //awaiting for the promise made up, use the id to
    //fetch states
    const jsonProfiles = JSON.stringify(profiles);
    return { props: {                    
                    profiles: jsonProfiles
                    } 
           }
}
export default profiles
