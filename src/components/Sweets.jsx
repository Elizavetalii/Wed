import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sweets = (props) => {
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
        <Button variant="primary">Добавить в корзину</Button>
      </Card.Body>
    </Card>
  )
}

export default Sweets