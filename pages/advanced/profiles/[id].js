import Layout from "../../../components/layout";
import auth0 from "../../../lib/auth0";
import data from "../../../profiles.json";
import Link from "next/link";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Details({ user, profile,allProfiles }) {


    let randomProfiles = [];

    //pickeando perfiles randoms

    do {
        let rand = Math.floor(Math.random() * allProfiles.length);
        if(randomProfiles.indexOf(allProfiles[rand]) === -1) {
            randomProfiles.push(allProfiles[rand]);
        }else continue;  
        
    } while (randomProfiles.length < 4);



    console.log(randomProfiles);

    const notify = () => {
        console.log("notify");
        toast.success("Se ha solicitado correctamente la Información de " + profile.firstName+" "+profile.lastName+".",  {
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

    return (
        <Layout user={user}>
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
                                    <>
                                        <Link href={'/advanced/profiles/'+profile.userId} >
                                            <div key={profile.userId} className="p-2 md:my-9 my-6 card cursor-pointer md:w-auto w-46">
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
                                    </>
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
    let  profileRes;
    const allProfiles = data.users;

    for (let i = 0; i < data.users.length; i++) {
        if (data.users[i].userId == params.id) {
            const profile = data.users[i];
            profileRes = profile;
        }
    }

    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login',
      })
      res.end()
      return
    }

    return { props:  {
                         user: session.user,
                         profile: profileRes,
                         allProfiles                        
                     } 
            }
}

export default Details;