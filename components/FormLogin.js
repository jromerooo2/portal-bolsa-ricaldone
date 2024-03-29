import { useState } from 'react';
import { handleLogin } from '../lib/handleSession';
import { useRouter } from 'next/router';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Layout from './layout';
import Link from 'next/link';

export default function FormLogin() {
  const [username, setUsername] = useState("")
  const router = useRouter();
  const [password, setPassword] = useState("")

  async function handleLoginLocal(e) {
    e.preventDefault();
    try{
      const data = await handleLogin(username, password);
      data ? router.push('/advanced/profiles') : null;
    }
    catch(error){

      toast.error("Usuario o contraseña incorrectos", {
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

  return (
    <Layout >
      {/* <div>
        <h1 className='text-center'>Por favor, Inicia Sesión para poder acceder a todos los postulantes.</h1>
      </div> */}
      <div className='md:flex justify-between items-center md:h-[750px]'>
        <div className='flex flex-col items-center space-y-6 md:w-1/2 p-7 md:p-0'>
          <Image src='/logo.png' alt='logo' width={120} height={120} />
          <h1 className='text-center text-green-saculum text-4xl'>Bienvenido</h1>
          <p className='text-center text-gray-600 font-poppins tracking-wide'> Inicia Sesión </p>

          <form className='space-y-5 md:w-1/2 w-full' onSubmit={handleLoginLocal}>
              <div className="flex flex-col items-center">
                  <input 
                    className='p-3 border border-gray-200 rounded-md w-2/3 shadow-md' 
                    type="text" 
                    placeholder="Nombre de Usuario"
                    onChange={(e) => setUsername(e.target.value)}
                    id='username'
                     />
                
              </div>
              <div className="flex flex-col items-center">
                  <input 
                    className='p-3 border border-gray-200 rounded-md w-2/3 shadow-md' 
                    type="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                    placeholder='Contraseña'
                      />
              </div>
              <div className="flex flex-col items-center">
                  <a href="#" className='text-green-700 underline underline-offset-1 tracking-wide'>¿Olvidaste tu contraseña?</a>
              </div>
              <div className='flex flex-col items-center'>
              
                <input className="inline-flex items-center justify-center px-6 py-3 bg-green-saculum hover:bg-green-saculum-light text-white font-medium rounded-md mx-4 w-2/3 cursor-pointer"
                type="Submit" 
                value="Iniciar Sesion"
                />
              
              </div>
          </form>
          <p className=''>Sin cuenta aún?       
          <Link href="/solicitar"> 
              <a className='text-blue-400 underline underline-offset-1 decoration-solid'>
                 Solicita Tu Cuenta
                </a>
          </Link>.
          </p>
        </div>
        <div className='bg-green-saculum-lighter md:w-1/2 h-full md:flex flex-col m-0 hidden'>
          <img src="/login2.svg" className='md:h-[400px] m-auto' alt="me"/>
        </div>
      </div>
      <ToastContainer>
      </ToastContainer>
    </Layout>
  )
}
