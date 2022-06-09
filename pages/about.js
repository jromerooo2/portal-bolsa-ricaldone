import Layout from '../components/layout'

function About() {
  let user = false;
  return (
    <Layout user={user}>
      <h1>Sobre Nosotros</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit lorem.
      </p>
    </Layout>
  )
}

export default About
