import React from "react";

interface TriangleProps {
    height: number;
    width: number
}

const Triangle: React.FC<TriangleProps> = ({ height, width }) => {
    const area = (height * width) / 2;
    return (
        <div>
            <h2>Triangle Area:</h2>
            <div className="d-flex">
                <p className="flex-1 border">Height: {height}</p>
                <p className='flex-1 border'>Width: {width}</p>
                <p className="flex-1 border">Area: {area}</p>
            </div>
        </div>
    )
}

export default Triangle