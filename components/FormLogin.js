import { useState } from 'react';
import { handleLogin } from '../lib/handleSession';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from './layout';
import Link from 'next/link';

export default function FormLogin() {
  const [username, setUsername] = useState("")
  const router = useRouter();
  const [password, setPassword] = useState("")

  function handleLoginLocal() {
    const data = handleLogin(username, password);

    if(data === 1){
      router.push('/advanced/profiles');
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
          <h1 className='text-center text-green-saculum text-4xl'>Bienvenido De Vuelta.</h1>
          <p className='text-center text-gray-600 font-poppins tracking-wide'> Inicia Sesión </p>
          <form className='space-y-5 md:w-1/2 w-full'>
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
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-green-saculum hover:bg-green-saculum-light text-white font-medium rounded-md mx-4 w-2/3" onClick={handleLoginLocal()}>
                      Iniciar Sesión
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg> */}
                    </button>
              </div>
          </form>
          <p className=''>Sin cuenta aún?       
          <Link href="/recuperar"> 
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
    </Layout>
  )
}
