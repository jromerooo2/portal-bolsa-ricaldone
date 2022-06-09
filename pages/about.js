import Layout from '../components/layout'

function About() {
  let user = false;
  return (
    <Layout user={user} >
      <div className=''>
        <header className='header bg-'>
          <h1>SOBRE NOSOTROS</h1>
        </header>
        <main className='p-0 m-0'>
          <div className="grid grid-cols-2 gap-10 mr-10">
            <div>
              <img src='https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/138641678_710761912912207_3140463209643283182_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6snThkQGTCwAX-grUyL&_nc_ht=scontent-ort2-2.xx&oh=00_AT8NUuY_uRIIFjPZqV70-vmkPFYQDVDVk_yo1m2YEt5qvg&oe=62C53940 ' className="rounded-lg md:h- mx-auto w-full"></img>
            </div>
            <div className=''>
              <h1 className=''>Sacculum</h1>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <br></br>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the 
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                 (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                 The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
            </div>
          </div>
        </main>
        <footer className='bg-stone-700 mt-5 rounded-t-lg'>
          <div className='flex justify-around'>
            <div>
              <h2 className='text-white pt-3'>CONTACTANOS</h2>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <h3 className='text-white'>
                bolsa_trabajo@gmail.com
              </h3>
            </div>
            <div>
              <h2 className='text-white pt-3'>CONTACTANOS</h2>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <h3 className='text-white'>
                bolsa_trabajo@gmail.com
              </h3>
            </div>
          </div>   
        </footer>
      </div>     
    </Layout>
  )
}

export default About
