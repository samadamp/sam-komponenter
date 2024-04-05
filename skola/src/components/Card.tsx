import React, {useState} from "react";

type Card = {
    text: string
}

type CardProp = {
    cards: Card []
}



const Cards: React.FC<CardProp> = ({cards}) => {
    const [currentCard, setCurrentCard] = useState(0)


    const next = () => {
        setCurrentCard((prev) => (prev + 1) % cards.length)
    }

    const previous = () => {
        setCurrentCard((prev => 
            prev === 0 ? cards.length - 1 : prev - 1))

    }




    return (
        <div>
            <div>{cards[currentCard].text}</div>
            <button onClick={next}>Next</button>
            <button onClick={previous}>Previous</button>
        </div>
    );
};




export default Cards