import React from 'react'
import PokemonDetails from '../PokemonDetails'
import { Pokemon } from '../../models/common.models'

interface Props {
    pokemon?: Pokemon
}

const PokemonCardDetails: React.FC<Props> = ({ pokemon }) => {
    return (
        <>
            <div className="h-20 border-b-2 border-paleGray flex flex-row items-center justify-between p-10 ">
                <h1 className="text-white font-medium text-2xl "> {pokemon?.name || 'No Selected Pokemon'}</h1>
                <h1 className="text-yellow font-medium text-2xl "> {pokemon?.number && `#${pokemon?.number} `}</h1>
            </div>
            <PokemonDetails {...pokemon} />
        </>
    )
}

export default PokemonCardDetails