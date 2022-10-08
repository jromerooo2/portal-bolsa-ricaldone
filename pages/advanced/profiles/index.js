import Layout from "../../../components/layout"
import Link from "next/link";
import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client"
import Image from "next/image";
const prisma = new PrismaClient();


function profiles({profiles}){
    const dataUsers = JSON.parse(profiles);
    const usuario = false;
    const [dataFiltered, setFilter] = useState([]);   
    const [query, setQuery] = useState("");

    const handleChange = () => {
        if(query === "Todos"){
            return dataUsers = dataUsers;
        }
        return dataUsers.filter((el) => el.workSubjects.WorkSubject.toLowerCase().includes(query.toLowerCase()));
    }
    
    useEffect(() => {
        setFilter(handleChange());
    },[dataUsers])
    
    return (
        <>
            <Layout user={usuario}>
                <h1 className="p-8 text-3xl text-center text-green-900 Font-bold">Perfiles Disponibles</h1>
                <p className="text-2xl text-center text-lime-900 Font">
                    Bienvenido {usuario.nameUser}, aquí encontraras todos los perfiles disponibles para contratos. 
                </p>
            <div class="flex text-center justify-center align-center items-center space-x-4">
                <h1 class="text-2xl text-center text-lime-900 Font">Buscar Por Area</h1>
                <div class="input-wrapper">
                <select className="p-2 mx-auto my-4 text-2xl text-center border-2 text-lime-900 Font" onChange={(e) => setQuery(e.target.value)}>
                        <option value="Todos">Todos</option>
                        <option value="ARQUITECTURA">ARQUITECTURA</option>
                        <option value="DISEÑO GRAFICO">DISEÑO GRÁFICO</option>
                        <option value="ELECTROMECANICA">ELECTROMECÁNICA</option>
                        <option value="SISTEMAS INFORMATICOS">SISTEMAS INFORMÁTICOS</option>
                        <option value="AERONAUTICO">AERONÁUTICO</option>
                        <option value="ELECTRONICA">ELECTRONICA</option>
                        <option value="HOSTELERÍA">HOSTELERÍA</option>
                        <option value="MECÁNICA INDUSTRIAL">MECÁNICA INDUSTRIAL</option>
                        <option value="MANTENIMIENTO AUTOMOTRIZ">MANTENIMIENTO AUTOMOTRIZ</option>
                        <option value="SISTEMAS ELECTRICOS">SISTEMAS ELÉCTRICOS</option>
                        <option value="ADMINISTRATIVO CONTABLE">ADMINISTRATIVO CONTABLE</option>
                        <option value="SERVICIOS TURISTICOS">SERVICIOS TURÍSTICOS</option>
                        <option value="DESARROLLO DE SOFTWARE">DESARROLLO DE SOFTWARE</option>
                        <option value="CONTADURIA">CONTADURÍA</option>
                        <option value="SECRETARIADO">SECRETARIADO</option>
                        <option value="SALUD">SALUD</option>
                        <option value="OTRO">OTRO</option>

                </select>
                </div>
            </div>
                    {
                        dataFiltered.length > 0 ? (
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

                        ):
                        (
                            <div className="flex items-center justify-center m-5 mx-auto space-x-4 text-center align-center">
                                    <div class=" rounded-lg border  p-8 text-center">
                                        <h2 class="text-2xl font-medium">Lo sentimos...</h2>

                                        <p class="mt-4 text-xl text-gray-500">
                                            Aun no existen postulantes en esa area!.
                                        </p>
                                        <Image src='/void.png' alt='logo' width={220} height={220} />
                                    </div>
                            </div>
                        )
                    }
            </Layout>
        </>
    )
}
export async function getServerSideProps({ req, res }) {

    //Logic for db querying
    const profiles = await prisma.Postulants.findMany({
          include: {         
            workSubjects: true
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
