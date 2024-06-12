import React from 'react';
import Item from './Item';

const CartItem = (props) => {

  const onAddoverlay = (props) => {
    try{
      if(props.overlayItems.find(item => Number(item.id) === Number(obj.id))){
        axios.delete('')
      }
    }
  }
  return (
    <div className="flower">
        {
            props.item.map(obj=>{
                return(
                    <Item
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

export default CartItem;