import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App';

const Sweets = (props) => {

    const context = React.useContext(AppContext);
    const onClickAdd = () => {
      const {id, myId, img:img,name:name, price:price, count:count,country:country} = props;
      props.onPlus({id, myId, img, name, price,count,country});
      
    }

    const onClickAddLike = () => {
      const {id, myId, img:img,name:name, price:price, count:count,country:country} = props;
      props.onLike({id, myId,img, name, price,count,country});
    }
  

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Цена ~{props.price} руб.
        </Card.Text>
        <Card.Text>
          Количество ~ {props.count} шт.
        </Card.Text>
        <Card.Text>
          Страна ~ {props.country}
        </Card.Text>
        <Button onClick={onClickAdd}>
          {
            context.isAdd(props.myId) ? 'Товар в корзине' : 'Добавить в корзину'
          }
        </Button>

        <Button onClick={onClickAddLike}>
          {
            context.isAddLike(props.myId) ? '♥' : '♡'
          }
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Sweets