import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { all } from 'axios';

const Overlays = ({ obj, onDelete }) => (
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
      <Card.Text>
        Страна ~ {obj.country}
      </Card.Text>
      <Button onClick={() => onDelete(obj.id)}>Удалить из корзины</Button>
    </Card.Body>
  </Card>
);

const Overlay = (props) => {

  return (
    <div>
      <div>
        <h2>Добро пожаловать в корзину!</h2>
      </div>

      {props.overlayItems.length > 0 ? (
        <div>
          {props.overlayItems.map((obj) => (
            <Overlays key={obj.id} obj={obj} onDelete={props.deleteItem} />
          ))}
        </div>
      ) : (
        <h2>Корзина пуста</h2>
      )}

      <div>
        <p>Итого: {props.totalPrice} руб.</p>
        <p>Количество товаров: {props.overlayItems.length} шт.</p>
      </div>
    </div>
  );
};

export default Overlay;



