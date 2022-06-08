import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import FormLogin from '../components/FormLogin'

function Home() {
  let user = "";

  if (typeof window !== "undefined") {
    user = localStorage.getItem("user");
  }
  return (
    <Layout user={user}>

      {!user && (
        <>
          <FormLogin />
        </>
      )}
    </Layout>
  )
}

export default Home
