import Head from 'next/head'
import Header from './header'
import Footer from './Footer'


function Layout({user,children}) {
  
  return (
    <div className=''>
      <Head>
        <title>Bolsa Ricaldone</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;800&display=swap" rel="stylesheet" />

      </Head>

      <Header/>

      <main>
        <div >{children}</div>
      </main>

      <Footer/>
    </div>
  )
}

export default Layout
