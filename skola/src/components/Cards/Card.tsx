import React, {useState} from "react";
import './Card.css';

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
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button>
        </div>
    );
};




export default Cards