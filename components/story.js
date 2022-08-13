import React,{ useState, useEffect} from 'react'
import Layout from './layout'
import TimePicker from './TimePicker'
import Link from 'next/link';

export default function Story(props){
  let { storyData, user } = props;
  
    const handleLatest = () => {
        return storyData?.map(obj => { return { ...obj, dateMod: new Date(`${obj.dateMod}`.replace(/-/g, '\/').replace(/T.+/, '')) } }).sort((a, b) => b.dateMod - a.dateMod);
    }
    const handleOldest = () => {
        return storyData?.map(obj => { return { ...obj, dateMod: new Date(`${obj.dateMod}`.replace(/-/g, '\/').replace(/T.+/, '')) } }).sort((a, b) => a.dateMod - b.dateMod)
    }
  const [dateFiltered, setFilter] = useState(handleLatest());

  const handleChange = (e) => {
    
    if(e.id === 1){

        const sortedDates = handleLatest();     
        setFilter(sortedDates);
    
    }else{

        const sortedDates = handleOldest();     

        setFilter(sortedDates);
    }   

  }


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
            <TimePicker callBack={handleChange}/>
          </div>
        </div>        

      </div>

        <div className='grid-cols-3 gap-3 mt-3 md:mt-9 md:grid p-5'>
            {
                dateFiltered.map((story, index) => {
                    return (
                        <div key={index}>
                            <div className='card-story'>
                                <Link href={'/advanced/profiles/'+story.Postulants.idPostulant} >
                                    <div className='flex items-start justify-between'>
                                        <div className='flex items-center'>
                                            <img className='w-16 h-16 mr-4 rounded-full' src={`data:image/jpeg;base64,${story.Postulants.photoPostulant}`} alt={story.Postulants.namePostulant + story.Postulants.lastName} />
                                            <div className='text-sm'>
                                                <h1 className='leading-none '>{story.Postulants.namePostulant} {story.Postulants.lastName}</h1>
                                                <p>{story.requestedInfo}</p>

                                            </div>
                                        </div>
                                        <div className='flex items-start'>
                                            <p className='text-xs '>
                                                {    
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
