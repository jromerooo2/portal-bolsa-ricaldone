import Head from 'next/head'
import Header from './header'

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Bolsa Ricaldone</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="flex flex-col items-center justify-center">{children}</div>
      </main>

    </>
  )
}

export default Layout
