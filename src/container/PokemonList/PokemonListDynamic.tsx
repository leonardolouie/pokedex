import dynamic from "next/dynamic";

const PokemonListDynamic = dynamic(() => import("./index"), {
    ssr: false,
});

export default PokemonListDynamic;
