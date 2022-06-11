import Layout from '../components/layout'
import AboutUs from '../components/AboutUs';
import HeaderAUs from '../components/HeaderAUs';

function About() {
  let user = false;
  return (
    <Layout user={user} >
      <HeaderAUs/>
      <AboutUs/>
    </Layout>
  )
}

export default About
