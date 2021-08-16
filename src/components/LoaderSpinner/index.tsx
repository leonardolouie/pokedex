import React from "react";
import Loader from "react-loader-spinner";

interface Props {
    type?: "TailSpin" | "Audio" | "BallTriangle" | "Bars" | "Circles" | "Grid" | "Hearts" | "Oval" | "Puff" | "Rings" | "ThreeDots" | "Watch" | "RevolvingDot" | "Triangle" | "Plane" | "MutatingDots" | "CradleLoader";
    color?: string;
    height?: number;
    width?: number;
    timeout?: number;
}

const LoaderSpinner: React.FC<Props> = ({
    type = "TailSpin",
    color = "#fffff",
    height = 200,
    width = 200,
    timeout = 0,
}) => {
    return (
        <Loader
            type={type}
            color={color}
            height={height}
            width={width}
            timeout={timeout}
        />
    );
};

export default LoaderSpinner;
