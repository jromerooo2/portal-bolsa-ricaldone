import React from 'react'
import Layout from './layout'


export default function Story(props){
  console.log(props);
  return (
    <Layout>
        <h1 className='text-center'>
            Perfiles Solicitados
        </h1>
        <div className='md:flex justify-center items-center md:h-[600px]'>
            
        </div>
    </Layout>
  )
}
