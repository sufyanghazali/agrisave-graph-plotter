import React from "react";  

const Card = ({ card, children }) => {
    const { heading, text } = card;

    return (
        <div className="my-12 py-12 border rounded-lg landing-page__card">
            <div className="flex flex-col text-center w-7/12">
                {children}
                <h3 className="text-4xl text-awGreen mb-2">{heading}</h3>
                <p className="text-lg text-gray-500">{text}</p>
            </div>

        </div>
    )
}

export default Card;