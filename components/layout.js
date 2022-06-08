import Head from 'next/head'
import Header from './header'

function Layout({ user, loading = false, children }) {
  return (
    <div className=''>
      <Head>
        <title>Bolsa Ricaldone</title>
      </Head>

      <Header user={user} loading={loading} />

      <main className='p-4'>
        <div >{children}</div>
      </main>

    </div>
  )
}

export default Layout
