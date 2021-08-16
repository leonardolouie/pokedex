import React from 'react'
import Layout from '../src/components/Layout';
import PokemonList from '../src/container/PokemonList/PokemonListDynamic'
import AuthenticatedRoute from '../src/components/AuthenticatedRoute/AuthenticatedRouteDynamic';

const IndexPage = () => {
    return (
        // <AuthenticatedRoute>
            <Layout title="Pokedex" name="Pokemon list">
                <PokemonList />
            </Layout>
        // </AuthenticatedRoute>
    );
}

export default IndexPage