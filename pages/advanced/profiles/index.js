import Layout from "../../../components/layout"
import Link from "next/link";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


function profiles({profiles}){
    const dataUsers = JSON.parse(profiles);
    const usuario = false;
    return (
        <>
            <Layout user={usuario}>
                <h1 className="p-8 text-3xl font-bold text-center">Perfiles Disponibles</h1>
                <p className="text-center">
                    Bienvenido {usuario.nameUser}, aquí encontraras todos los perfiles disponibles para contratos. 
                </p>
                <div className="grid-cols-3 md:grid">
                    {
                        dataUsers.map(user => (
                            <div key={user.idPostulant}>
                                <Link href={'/advanced/profiles/'+user.idPostulant} >
                                    <div key={user.userId} className="p-2 my-6 cursor-pointer md:my-9 card">
                                        <div className={`bg-white rounded-lg shadow-xl p-4 ${user.Alumni ? "border border-yellow-500":""}`}>
                                            <span className={`rounded p-2 bg-red-500 text-white absolute -mt-8 ${user.Alumni ? "":"hidden"}`}>Recomendado</span>
                                            <img src={`data:image/jpeg;base64,${user.photoPostulant}`} alt={user.namePostulant} className="mx-auto rounded h-36" />
                                            <h2 className="text-xl font-bold">{user.namePostulant +" "+ user.lastName}</h2>
                                            <p>{user.mailPostulant}</p>
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
