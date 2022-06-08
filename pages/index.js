import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import FormLogin from '../components/FormLogin'

function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1 className='font-bold text-2xl'>Bolsa de Trabajos del Ricaldone</h1>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <FormLogin />
        </>
      )}
    </Layout>
  )
}

export default Home
