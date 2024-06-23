import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App'


const Likes = ({ obj, onDelete,onPlus, myId}) => {

  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={obj.img} />
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <Card.Text>
          Цена ~{obj.price} руб.
        </Card.Text>
        <Card.Text>
          Количество ~ {obj.count} шт.
        </Card.Text>
        <Button onClick={() => onDelete(obj.id)}>Удалить</Button>
      </Card.Body>
    </Card>
  )
}

const Like = (props) => (
  
  <div>
    <div>
      <h2>Добро пожаловать в избранное!</h2>
    </div>

    {props.likeItems.length > 0 ? (
      <div>
        {props.likeItems.map((obj) => (
          <Likes key={obj.id} obj={obj} onDelete={props.deleteItemLike} onPlus={props.onClickAdd} myId={obj.myId}/>
        
        ))}
      </div>
    ) : (
      <h2>Здесь пусто..</h2>
    )}

    <div>
      <p>Количество товаров: {props.likeItems.length} шт.</p>
    </div>
  </div>
);

export default Like;



