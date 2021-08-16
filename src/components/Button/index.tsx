import React from 'react'

interface Props {
    type: "button" | "submit" | "reset",
    label?: string;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ type, label, onClick }) => {
    return (
        <button
            onClick={onClick && onClick}
            type={type}
            className="block text-center text-white bg-yellow p-3 duration-300 rounded-sm hover:bg-black w-full">
            {label}
        </button>
    )
}

export default Button