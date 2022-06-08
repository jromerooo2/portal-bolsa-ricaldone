import React from 'react'
import Layout from '../components/layout'
import FormLogin from '../components/FormLogin'

export default function login() {
  const user = false;
  return (
    <Layout>

    {!user && (
      <>
        <FormLogin />
      </>
    )}
  </Layout>
  )
}
