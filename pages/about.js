import Layout from '../components/layout'

function About() {
  let user = "";

  if (typeof window !== "undefined") {
    user = localStorage.getItem("user");
  }
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
