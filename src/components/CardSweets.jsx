import React from 'react';
import Sweets from './Sweets';
import axios from 'axios';

const CardSweets = (props) => {

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
    <div className="sweet">
        {
            props.item.map(obj=>{
                return(
                    <Sweets
                    myId={obj.myId}
                    id={obj.id}
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

export default CardSweets;