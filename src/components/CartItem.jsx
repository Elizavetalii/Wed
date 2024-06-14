import React from 'react';
import Item from './Item';
import axios from 'axios';

const CartItem = (props) => {

  const onAddOverlay = (obj) => {
    try{
      if(props.overlayItems.find(item => Number(item.id) === Number(obj.id))){
        axios.delete(`http://localhost:3001/overlays/${obj.id}`);
        props.setoverlay((over)=>over.filter(item => Number(item.id) !== Number(obj.id)));
      }
      else{
        axios.post('http://localhost:3001/overlays', obj);
        props.setoverlay([...props.overlayItems, obj]);
      }
    }
    catch{
      alert('Ошибка при добавлении товара в корзину');
    }
  };

  const onAddLike = (obj) => {
    try{
      if(props.likeItems.find(item => Number(item.id) === Number(obj.id))){
        axios.delete(`http://localhost:3001/like/${obj.id}`);
        props.setlike((over)=>over.filter(item => Number(item.id) !== Number(obj.id)));
      }
      else{
        axios.post('http://localhost:3001/like', obj);
        props.setlike([...props.likeItems, obj]);
      }
    }
    catch{
      alert('Ошибка при добавлении товара в корзину');
    }
  };
  
  return (
    <div className="flower">
        {
            props.item.map(obj=>{
                return(
                    <Item
                    id={obj.id}
                    myId={obj.myId}
                    key={obj.id}

                    name={obj.name}
                    price={obj.price}
                    count={obj.count}
                    country={obj.country}
                    img={obj.img}
                    onPlus ={(cartObj)=>onAddOverlay(cartObj)}
                    onLike ={(cartObj)=>onAddLike(cartObj)}
                    />
                )

            })
        }
    </div>
  );
}

export default CartItem;