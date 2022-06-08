import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function About() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Sobre Nosotros</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit lorem.
      </p>
    </Layout>
  )
}

export default About
