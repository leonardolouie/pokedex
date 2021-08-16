import React from 'react'


interface Props {
    image: string;
    id: number | string;
    name: string
    onClick: () => void;
}

const CardStrips: React.FC<Props> = ({ image, id, name, onClick }) => {
    return (
        <div
            onClick={onClick && onClick}
            className="bg-bgCardStrips  flex flex-row rounded shadow-sm  p-4 mb-4 mt-4 cursor-pointer hover:bg-paleGray2">
            <img className="inline-block h-6 w-6 rounded-full mr-3" src={image} alt={name} />
            <p className="text-yellow  font-medium mr-4">{id}</p>
            <p className="text-white font-semibold">{name}</p>
        </div>
    )
}

export default CardStrips