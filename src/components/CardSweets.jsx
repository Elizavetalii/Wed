import React from 'react';
import Sweets from './Sweets';

const CardSweets = (props) => {
  return (
    <div className="sweet">
        {
            props.item.map(obj=>{
                return(
                    <Sweets
                    id={obj.id}
                    key={obj.id}

                    name={obj.name}
                    price={obj.price}
                    count={obj.count}
                    country={obj.country}
                    img={obj.img}
                    />
                )
            })
        }
    </div>
  );
}

export default CardSweets;