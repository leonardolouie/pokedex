import React from 'react'
import Layout from '../src/components/Layout';
import Login from '../src/container/Login'

const LoginPage = () => {

  return (
    <Layout title="Pokedex" name="Login">
      <Login />
    </Layout>
  );
}

export default LoginPage