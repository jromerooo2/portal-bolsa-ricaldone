import {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function FormLogin() {
  const [username, setUsername] = useState("")
  const router = useRouter();
  const [password, setPassword] = useState("")

  async function handleLogin() {
    const credentials = {username,password}
    const res = await axios.post('/api/login',credentials)
    if(res.status === 200){
      router.push('/')
    }
  }

  return (
    <div className='md:flex justify-center items-center md:h-[600px]'>
        <img className='md:h-[400px]' src='https://doodleipsum.com/700/outline?i=eacd5c618536b91da299b3f30d1d55a4' />

        <form className='space-y-5'>
            <div className="flex flex-col ">
                <input 
                  className='border-2 border-black rounded-full p-2' 
                  type="text" 
                  placeholder="Correo Electrónico"
                  onChange={(e) => setUsername(e.target.value)} />
               
            </div>
            <div className="flex flex-col ">
                <input 
                  className='border-2 border-black rounded-full p-2' 
                  type="Password" 
                  placeholder='Contraseña'
                  onChange={(e) => setPassword(e.target.value)}  />
            </div>
            <div className='space-x-4'>
              <input className='border-2 border-black rounded-xl p-2 cursor-pointer hover:bg-green-400 hover:text-white' type="button" value='Iniciar Sesión' onClick={handleLogin} />
              <a className='text-blue-500 hover:text-blue-700' href='/'>¿Olvidaste tu contraseña?</a>
            </div>
        </form>
            
    </div>
  )
}
