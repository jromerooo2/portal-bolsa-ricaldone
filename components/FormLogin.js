import React from 'react'

export default function FormLogin() {
  return (
    <div className='flex justify-center'>
        <img className='' src=''>
        </img>
        <form className='space-y-5'>
            <div className="flex flex-col ">
                <input className='border-2 border-black rounded-full p-2' type="email" placeholder="Correo Electrónico" />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="flex flex-col ">
                <input className='border-2 border-black rounded-full p-2' type="Password" placeholder='Contraseña'  />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <input className='border-2 border-black rounded-full p-2 cursor-pointer hover:bg-green-400 hover:text-white' type="button" value='Iniciar Sesión' />
        </form>
            
    </div>
  )
}
