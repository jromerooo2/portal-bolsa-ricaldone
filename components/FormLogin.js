import {useState} from 'react';
import { handleLogin } from '../lib/handleSession';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from './layout';

export default function FormLogin() {
  const [username, setUsername] = useState("")
  const router = useRouter();
  const [password, setPassword] = useState("")

  async function handleLoginLocal() {
    const data = await handleLogin(username, password);
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
        <div className='flex flex-col items-center space-y-6 md:w-1/2'>
          <Image src='/logo.png' alt='logo' width={120} height={120} />
          <h1 className='text-center text-green-saculum text-4xl'>Bienvenido De Vuelta.</h1>
          <p className='text-center text-gray-600 font-poppins tracking-wide'> Inicia Sesión </p>
          <form className='space-y-5 md:w-1/2'>
              <div className="flex flex-col items-center">
                  <input 
                    className='p-3 border border-gray-200 rounded-md w-2/3 shadow-md' 
                    type="text" 
                    placeholder="Correo Electrónico"
                    onChange={(e) => setUsername(e.target.value)} />
                
              </div>
              <div className="flex flex-col items-center">
                  <input 
                    className='p-3 border border-gray-200 rounded-md w-2/3 shadow-md' 
                    type="Password" 
                    placeholder='Contraseña'
                    onChange={(e) => setPassword(e.target.value)}  />
              </div>
              <div className="flex flex-col items-center">
                  <a href="#" className='text-green-700 underline underline-offset-1 tracking-wide'>¿Olvidaste tu contraseña?</a>
              </div>
              <div className='flex flex-col items-center'>
                    <button class="inline-flex items-center justify-center px-6 py-3 bg-green-saculum hover:bg-green-saculum-light text-white font-medium rounded-md mx-4 w-2/3">
                      Iniciar Sesión
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                    </button>
              </div>
          </form>
          <p className='text-green-700'>Sin cuenta aún?  <a href="#" className='text-blue-400 underline underline-offset-1	decoration-solid'>Solicita Tu Cuenta</a>.</p>
        </div>
        <div className='bg-green-saculum-lighter md:w-1/2 h-full flex flex-col m-0'>
          <img src="/login2.svg" className='md:h-[400px] m-auto' alt="me"/>
        </div>
      </div>
    </Layout>
  )
}
