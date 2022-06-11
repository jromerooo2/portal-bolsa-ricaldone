import React from 'react'
import Layout from './layout'


export default function Story(props){
  let { storyData, user } = props;
  console.log(storyData);
  return (
    <Layout>
        <h1 className='text-center'>
            Hola, {user.nameUser},este es un listado de todos los perfiles que has solicitado
        </h1>
        <div className='grid-cols-3 space-x-5 md:grid'>
            {
                storyData.map((story, index) => {
                    return (
                        <div className='' key={index}>
                            <div className='px-8 pt-6 pb-8 mb-4 bg-green-200 rounded shadow-xl'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <img className='w-10 h-10 mr-4 rounded-full' src="https://media.discordapp.net/attachments/881990540860731402/984830320023064636/unknown.png" alt={story.Postulants.namePostulant + story.Postulants.lastName} />
                                        <div className='text-sm'>
                                            <h1 className='leading-none text-gray-900'>{story.Postulants.namePostulant} {story.Postulants.lastName}</h1>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-xs text-gray-600'>{story.dateMod}</p>
                                    </div>
                                </div>
                                <div className='text-base text-gray-800'>
                                    <p>{story.requestedInfo}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Layout>
  )
}
