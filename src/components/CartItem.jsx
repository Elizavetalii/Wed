import React from 'react';
import Item from './Item';
import axios from 'axios';

const CartItem = (props) => {

  const [selectedType, setSelectedType] = React.useState(null);

  const onTypeChange = (type) => {
    setSelectedType(type);
  };

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

  const onSearch = (inputValue) => {
    props.setSearch(inputValue.target.value);

  };

  return (
    <div className="flower">
      <div>
        <input onChange={onSearch} placeholder="Поиск"></input>
      </div>
      <div>
        <select onChange={(e) => onTypeChange(e.target.value)}>
          <option value="">Все типы</option>
          <option value="Роза">Розы</option>
          <option value="Пион">Пионы</option>
          <option value="гипсофила">Гипсофилы</option>
        </select>
      </div>

      {
        props.item
        .filter((item) =>
          (!selectedType || item.type === selectedType) && item.name.toLowerCase().includes(props.search.toLowerCase())
        )
          .map(obj=>{
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