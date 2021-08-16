import React from 'react'
import { Pokemon } from '../../models/common.models'

type Props = Pokemon

const PokemonDetails: React.FC<Props> = ({ ...props }) => {

    const defaultImage = 'https://www.dafont.com/forum/attach/orig/6/4/640741.png?1'

    return (<div className="w-full flex flex-row justify-center mt-10">
        <div className="w-1/2 container mx-auto px-6 flex items-start justify-center">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row mx-auto bg-white shadow-2xl  rounded-2xl">
                    <div className="w-full px-12 flex flex-col items-center py-10">
                        <div className="w-40 h-40 mb-3 p-2   flex items-center justify-center">
                            <img className="w-full h-full overflow-hidden object-cover" src={props?.image || defaultImage} alt={props?.name} />
                        </div>
                        <h2 className="text-2xl tracking-normal font-medium mb-1">{props?.name || 'N/A'}</h2>
                        <p className="text-gray-800 text-sm tracking-normal font-medium mb-8 text-center w-10/12">{props?.classification || 'N/A'}</p>
                        <div className="flex items-start">
                            <div className="mr-4">
                                <h2 className="text-gray-800 text-xl leading-6 mb-2 text-center">{props?.height?.minimum || 'N/A'}</h2>
                                <p className="text-yellow  text-sm leading-5">Min. Height</p>
                            </div>
                            <div>
                                <h2 className="text-gray-800 text-xl leading-6 mb-2 text-center">{props?.height?.maximum || 'N/A'}</h2>
                                <p className="text-yellow  text-sm leading-5">Max. Height</p>
                            </div>
                        </div>
                        <div className="flex items-start mt-5">
                            <div>
                                <h2 className="text-gray-800 text-xl leading-6 mb-2 text-center mr-5">{props?.weight?.maximum || 'N/A'}</h2>
                                <p className="text-yellow  text-sm leading-5">Min. Weight</p>
                            </div>
                            <div>
                                <h2 className="text-gray-800 text-xl leading-6 mb-2 text-center">{props?.weight?.maximum || 'N/A'}</h2>
                                <p className="text-yellow text-sm leading-5">Max. Weight</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PokemonDetails