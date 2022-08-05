import React from 'react'
import Layout from './layout'
import TimePicker from './TimePicker'
import Link from 'next/link';

export default function Story(props){
  let { storyData, user } = props;
  console.log(storyData);

  return (
    <Layout>
      <div className="items-center grid-cols-2 mb-4 space-y-10 text-xl text-center text-gray-900 md:space-y-0 md:grid">
        <div>
          <h1 className='text-center'>
              Hola, <span className='text-green-saculum'>
                  {user.nameUser}.
              </span>
          </h1>
          <p className='text-center font-poppins'>
              Aquí podrás ver el historial de información que has solicitado.
          </p>
        </div>
        <div className=''>
          <div className='md:w-1/2 font-poppins'>
            <TimePicker/>
          </div>
        </div>        

      </div>

        <div className='grid-cols-3 gap-3 mt-3 md:mt-9 md:grid'>
            {
                storyData.map((story, index) => {
                    return (
                        <div key={index}>
                            <div className='card-story'>
                                <Link href={'/advanced/profiles/'+story.Postulants.idPostulant} >
                                    <div className='flex items-start justify-between'>
                                        <div className='flex items-center'>
                                            <img className='w-16 h-16 mr-4 rounded-full' src="https://cdn.discordapp.com/attachments/820024965683216404/985296933931323422/unknown.png" alt={story.Postulants.namePostulant + story.Postulants.lastName} />
                                            <div className='text-sm'>
                                                <h1 className='leading-none '>{story.Postulants.namePostulant} {story.Postulants.lastName}</h1>
                                                <p>{story.requestedInfo}</p>

                                            </div>
                                        </div>
                                        <div className='flex items-start'>
                                            <p className='text-xs '>{
                                                    new Date(story.dateMod).toLocaleDateString('es-ES', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })                                               
                                                    }
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Layout>
  )
}
