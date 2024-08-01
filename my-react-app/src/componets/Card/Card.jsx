/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Button from "../Button";
import ".Card.css";


const {title , image , price } = Image;

// eslint-disable-next-line no-unused-vars
const [count , setCount]  = useState(0);
 // eslint-disable-next-line react/prop-types, no-unused-vars
 function Card({Image}, onAdd , onRemove){
  // eslint-disable-next-line no-unused-vars
  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(Image)
  };
  // eslint-disable-next-line no-unused-vars
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(Image)
  };
  
    return (
   <><div className="card">
            <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
            >
                {count}
            </span>
            <div className='image__container'>
                <img src={image} alt={title} />

            </div>
            <h4 className='card__title'>
                {title} . <span className="card__price"> $ {price}</span>
            </h4>

            <div className="btn-container">

                <Button/>
            </div>
        </div><div>Card</div></>
        
  )
}

export default Card;