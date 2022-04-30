import Layout from "../../../components/layout";
import auth0 from "../../../lib/auth0";
import data from "../../../profiles.json";
import Link from "next/link";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

function Details({ user, profile}) {
    console.log(profile)
    let randomProfiles = [];

    //pickeando perfiles randoms con mismas caracteristicas
    const notify = () => {
        toast.success("Se ha solicitado correctamente la Información de " + profile.firstName + " " + profile.lastName + ".", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            theme: "dark",
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

    // do {
    //     let rand = Math.floor(Math.random() * allProfiles.length);
    //     if(randomProfiles.indexOf(allProfiles[rand]) === -1 && 
    //        allProfiles[rand].userId !== profile.userId) {

    //         randomProfiles.push(allProfiles[rand]);

    //     }         
    // } while (randomProfiles.length < 4);


    return (
        <Layout user={user}>
            <Link href='/advanced/profiles/' >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left cursor-pointer" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="11" y2="18" />
                    <line x1="5" y1="12" x2="11" y2="6" />
                </svg>
            </Link>
            <div className="flex items-center justify-center">
                <div className="md:flex items-center space-x-7">
                    <img src={profile.img} alt={profile.name} className="rounded h-64 mx-auto" />
                    <div className="space-y-5">
                        <h1 className="font-bold text-3xl">{profile.firstName +" " +profile.lastName}</h1>
                        <h1 className="text-xl"> <b>Número de Teléfono:</b><br></br> {profile.phoneNumber}</h1>
                        <h1 className="text-xl"> <b>Correo Electrónico:</b><br></br> {profile.emailAddress}</h1>
                        <p className="text-xl">Para conectar con el personal mostrado, haz click en el botón de abajo.</p>
                        <button onClick={notify} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contactar</button>
                        
                        <ToastContainer>
                        </ToastContainer>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="font-bold text-3xl p-8 text-center text-center">Perfiles Recomendados</h1>
                <div className="grid md:grid-cols-4 grid-cols-2 ">
                    {
                        randomProfiles.map(
                            profile => (
                                    <div key={profile.userId}>
                                        <Link  href={'/advanced/profiles/'+profile.userId} >
                                            <div  className="p-2 md:my-9 my-6 card cursor-pointer md:w-auto w-46">
                                                <div className={`bg-white rounded-lg shadow-xl p-4 ${profile.exalumno ? "border border-yellow-500":""}`}>
                                                    <div className="flex items-center justify-center">
                                                        <img src={profile.img} alt={profile.name} className="rounded md:h-64 mx-auto" />
                                                     </div>
                                                    <div className="space-y-5">
                                                        <h1 className="font-bold text-3xl">{profile.firstName} <br></br> {profile.lastName}</h1>
                                                        {/* <h1 className="text-xl"> <b>Número de Teléfono:</b><br></br> {profile.phoneNumber}</h1> */}
                                                        {/* <h1 className="text-xl"> <b>Correo Electrónico:</b><br></br> {profile.emailAddress}</h1> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                        )) 
                    }
                </div>
            </div>
        </Layout>
    );
}


export async function getServerSideProps({ params,req, res }) {
    //Logic to get multiple curriculum profiles to render later #SSR😎 
    const session = auth0.getSession(req, res)
    const profile = await prisma.postulants.findUnique({
        where: {
            idPostulant: params.id
        }
    })

    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login',
      })
      res.end()
      return
    }

    return { props:  {
                         user: session.user,
                         profile                                               
                     } 
            }
}

export default Details;