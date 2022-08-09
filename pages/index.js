import Layout from '../components/layout'
import Hero from '../components/Landing/Hero'
import Ventajas from '../components/Landing/Ventajas'
import HeroTwo from '../components/Landing/HeroTwo'

function Home() {
  return (
    <Layout >
      <Hero />
      <Ventajas />
      <HeroTwo />
    </Layout>
  )
}

export default Home
