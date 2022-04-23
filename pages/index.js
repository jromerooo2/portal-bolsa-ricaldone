import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1 className='font-bold text-2xl'>Bolsa de Trabajos del Ricaldone</h1>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p className='text-center mt-4'>
            Bienvenido a la bolsa de trabajos del Ricaldone, por favor inicia sesión para poder<br></br> acceder a todos los perfiles disponibles para contratos.
          </p>
        </>
      )}

      {user && (
        <>
        </>
      )}
    </Layout>
  )
}

export default Home
