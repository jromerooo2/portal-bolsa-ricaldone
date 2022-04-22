import Layout from "../../components/layout"
import auth0 from "../../lib/auth0"

function profiles({user}){
    return (
        <>
            <Layout user={user}>
                <h1>Perfiles Disponibles</h1>
                <p>Bienvenido {user.nickname}, aquí encontraras todos los perfiles disponibles para contratos. </p>
            </Layout>
        </>
    )
}
export async function getServerSideProps({ req, res }) {
    //Logic to get multiple curriculum profiles to render later #SSR😎 
    const session = await auth0.getSession(req, res)

    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login',
      })
      res.end()
      return
    }
  
    return { props: { user: session.user } }
}
export default profiles
