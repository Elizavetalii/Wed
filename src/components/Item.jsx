import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App'

const Item = (props) => {

  const context = React.useContext(AppContext);
  const onClickAdd = () => {
    const {id, myId, name:name, description:description, price:price} = props;
    
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          Цена ~{props.price}
        </Card.Text>
        <Card.Text>
          Количество ~ {props.count}
        </Card.Text>
        <Card.Text>
          Страна ~ {props.country}
        </Card.Text>
        <Button onClick={onClickAdd}>
          {
            context.cart.find(item => item.id === props.id)
             ? 'Уже в корзине'
              : 'Добавить в корзину'

            
          }
          {
            context.isAdd(props.myId) ? 'Добавлен' 
            : 'Добавить в корзину'
          }
          Добавить в корзину
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Item