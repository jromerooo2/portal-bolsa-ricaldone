import { useState } from "react";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Contra(){
  const [correo,setCorreo] = useState("");
  const [nombre,setNombre] = useState("");
  const [empresa,setEmpresa] = useState("");

  const result = async () => {
            return await axios.post("/api/addMod", {
                idPostulant: null,
                dateMod: new Date(),
                context: correo,
                request: nombre,
                requestedInfo: "La persona "+nombre+" con correo "+correo+" de la empresa "+empresa+" ha solicitado su perfil en el sistema.",
                idUserSystem: null,
            })        
}
//pickeando perfiles randoms con mismas caracteristicas
const request = async () => {  

    try {
        if(correo === "" || nombre === "" || empresa === ""){
          toast.error("Por favor, llene todos los campos", {
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
          const res = await result();  
          
          if(res.status === 200){
                  toast.success(" Haz solicitado correctamente tu cuenta en el sistema.", {
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
        
    }
     catch (error) {    
        toast.error("Ocurrio Un Error", {
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
function handleSubmit(){
    request();
}
    return (

<div className="text-gray-100 px-8 py-12 bg-green-saculum-lighter font-poppins shadow-2xl">
      <div className="text-center w-full">
      </div>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-16 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight ">Solicita Tu Cuenta en Sacculum.</h2>
            <p className="text-gray-600 text-md">Responderemos con tu los datos de tu cuenta en cuanto hayamos verificado tu identidad.</p>
          </div>
          <div className="">
            <img src="/mail.svg" alt="logo" className=""/>
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Nombre Completo</span>
            <input 
            onChange={(e) => setNombre(e.target.value)}
            required 
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Correo Electrónico</span>
            <input 
            onChange={(e) => setCorreo(e.target.value)}
            required 
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Empresa a la que pertenece</span>
            <input onChange={(e) => setEmpresa(e.target.value)} required className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
          <div className="mt-8">
            <button 
              onClick={handleSubmit}
              className="uppercase text-sm font-bold tracking-wide bg-green-saculum text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Solicitar
            </button>
            <ToastContainer>
            </ToastContainer>
          </div>
        </div>
      </div>
    </div>
    )
}