import Layout from "../../../components/layout"
import auth0 from "../../../lib/auth0"
import data from "../../../profiles.json"
// import { getAllPostulants } from "../../../hooks/useAllProfiles";
import Link from "next/link";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


function profiles({user, profiles}){
    // console.log(users);
    const dataUsers = profiles;


    return (
        <>
            <Layout user={user}>
                <h1 className="font-bold text-3xl p-8 text-center">Perfiles Disponibles</h1>
                <p className="text-center">
                    Bienvenido {user.nickname}, aquí encontraras todos los perfiles disponibles para contratos. 
                </p>
                <div className="md:grid grid-cols-4 grid-rows-3">
                    {
                        dataUsers.map(user => (
                            <div key={user.userId}>
                                <Link href={'/advanced/profiles/'+user.userId} >
                                    <div key={user.userId} className="p-2 md:my-9 my-6 card cursor-pointer">
                                        <div className={`bg-white rounded-lg shadow-xl p-4 ${user.exalumno ? "border border-yellow-500":""}`}>
                                            <span className={`rounded p-2 bg-red-500 text-white absolute -mt-8 ${user.exalumno ? "":"hidden"}`}>Recomendado</span>
                                            <img src={user.img} alt={user.name} className="rounded h-36 mx-auto" />
                                            <h2 className="font-bold text-xl">{user.firstName +" "+ user.lastName}</h2>
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
    //Logic to get multiple curriculum profiles to render later #SSR😎 
    const session = await auth0.getSession(req, res)
    
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login',
      })
      res.end()
      return
    }


    //Logic for db querying
    const profiles = await prisma.Postulants.findMany();

    return { props: {
                     user: session.user,
                     profiles
                } }
}
export default profiles
