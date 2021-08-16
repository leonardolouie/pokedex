import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import CardStrips from './components/CardStrips'
import { PokemonQuery, Pokemon } from './models/common.models'
import { useState, useEffect } from "react";
import Pagination from './components/Pagination'
import PokemonCardDetails from "./components/PokemonCardDetails";
import ModalComp from './components/Modal'
import { useMediaQuery } from 'react-responsive';

const PokemonListQuery = graphql`
  query PokemonListQuery {
      pokemons(first: 151) {
      id
      number
      name  
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;

const PokemonList = () => {
  const data: PokemonQuery = useLazyLoadQuery(PokemonListQuery, {
    variables: {},
  });

  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(12)
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const indexOfLastPost = currentPage * dataPerPage
  const indexofFirstPost = indexOfLastPost - dataPerPage
  const currentData = data?.pokemons.slice(indexofFirstPost, indexOfLastPost)

  const isSmallSize = useMediaQuery({ query: `(max-width: 1023px)` })

  const paginate = (number: number) => {
    setCurrentPage(number)
  }

  useEffect(() => {
    if (!isSmallSize)
      setIsOpenModal(false)
  }, [isSmallSize])

  return (
    <div className="h-screen px-5 lg:px-24 py-3.5 flex flex-row items-center">
      <div className="w-full lg:w-2/5 relative rounded-md shadow-md bg-paleGray h-4/5 ">
        <div className="py-10 px-9 overflow-auto h-full">
          {currentData?.map((val) => {
            return (
              <CardStrips
                name={val?.name}
                id={val?.number}
                image={val?.image}
                onClick={() => {
                  setSelectedPokemon(val)
                  if (isSmallSize)
                    setIsOpenModal(true)
                }}
              />
            )
          })}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-bgPanel h-16 items-center  flex flex-row justify-between">
          <Pagination pageLimit={4} currentPage={currentPage} dataPerPage={dataPerPage} totalData={data?.pokemons?.length} paginate={paginate} />
        </div>
      </div>
      <div className="hidden lg:block rounded-md shadow-md bg-paleGray2 h-4/5 w-3/5 ">
        <PokemonCardDetails pokemon={selectedPokemon} />
      </div>
      <ModalComp modalIsOpen={isOpenModal} onCloseModal={() => setIsOpenModal(false)}>
        <div className="rounded-md shadow-md bg-paleGray2 w-full h-full ">
          <PokemonCardDetails pokemon={selectedPokemon} />
        </div>
      </ModalComp>
    </div>
  )
}

export default PokemonList;