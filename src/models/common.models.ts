export interface PokemonQuery {
    pokemons?: Pokemon[]
}


export interface Pokemon {
    classification?: string;
    height?: MinMax;
    id?: string;
    image?: string;
    name?: string;
    weight?: MinMax;
    number?: string;
}

export interface MinMax {
    maximum: string;
    minimum: string;
}