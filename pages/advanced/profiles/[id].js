import Layout from "../../../components/layout";
import Link from "next/link";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getPostulant from "../../../lib/getPostulant";
import axios from "axios";

function Details({ user, profile}) {
    
    let randomProfiles = [];
    profile = JSON.parse(profile);
    user = JSON.parse(user);
    console.log(user)
    const result = async () => {
        return await axios.post("/api/addMod", {
            idPostulant: profile.idPostulant,
            dateMod: new Date(),
            context: user.mailUser,
            request: user.nameUser,
            requestedInfo: "Informacion solicitada del postulante: "+profile.namePostulant+" "+profile.lastName,
        })
        
}


    //pickeando perfiles randoms con mismas caracteristicas
    const request = async () => {
        const res = await result();
        
        if(res.status === 200){
            toast.success("Se ha solicitado correctamente la Información de " + profile.namePostulant + " " + profile.lastName + ".", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "dark",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }else{
            toast.error("Ha ocurrido un error, por favor intentalo más tarde.", {
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
                            <h1 className="font-bold text-3xl">{profile.namePostulant +" " +profile.lastName}</h1>
                            <h1 className="text-xl"> 
                                <b>Trabajo de Interés:</b>
                                <br></br> 
                                <span className="nested-camp">
                                    {profile.workSubjects.WorkSubject}
                                </span>
                            </h1>
                            <h1 className="text-xl"> 
                                <b>Contrato de Interés:</b>
                                <br></br>
                                <span className="nested-camp">
                                    {profile.ContractType_ContractTypeToPostulants.WType}
                                </span>
                            </h1>
                        <p className="text-xl">Para conectar con el personal mostrado, haz click en el botón de abajo.</p>
                        <button onClick={request} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contactar</button>
                        
                        <ToastContainer>
                        </ToastContainer>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="font-bold text-3xl p-8 text-center">Perfiles Recomendados</h1>
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
                                                        <h1 className="font-bold text-3xl">{profile.namePostulant} <br></br> {profile.lastName}</h1>
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
    const contratista = await axios.get("http://localhost:3000/api/me");
    
    const contratistaJSON = JSON.stringify(contratista.data.decoded.responseBd);
    //Logic to get multiple curriculum profiles to render later #SSR😎 
    const { id } = params;

    const profile = await getPostulant(id);

    const jsonProfile = JSON.stringify(profile);


    return { props:  {
                                 user: contratistaJSON,
                                 profile:jsonProfile                    
                    } 
            }
}

export default Details;