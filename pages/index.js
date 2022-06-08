import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import FormLogin from '../components/FormLogin'

function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
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
