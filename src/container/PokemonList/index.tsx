import React, { Suspense } from "react";
import PokemonList from '../../PokemonList'
import LoaderSpinner from "../../components/LoaderSpinner";
import { useRouter } from 'next/router'

const Index = () => {
    const user = localStorage && JSON.parse(localStorage?.getItem('user'))
    const router = useRouter()

    const resetLocalStorage = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authenticated');

    }
    const logout = () => {
        resetLocalStorage()
        router.push('/login')
    }

    const LoadingFallBack = () => {
        return (
            <div className="h-screen w-full flex flex-column justify-center">
                <div>
                    <LoaderSpinner />
                    <p className="text-2xl text-white"> Loading data please wait... </p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-bgGray w-full">
            <div className="pt-2 pl-2 pr-2">
                <p className="text-white font-medium"> {`Current user: ${user?.email}`}</p>
                <a
                    href="#"
                    className="text-yellow hover:text-white"
                    onClick={() => logout()}>
                    Logout
                </a>
            </div>
            <Suspense fallback={<LoadingFallBack />}>
                <PokemonList />
            </Suspense>
        </div>
    );
}
export default Index