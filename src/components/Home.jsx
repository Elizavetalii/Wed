import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = (props) => {
  
  return (

<Row xs={1} md={2} className="g-4">
{Array.from({ length: 1 }).map((_, idx) => (
  <Col key={idx}>
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        Количество ~ {props.count} шт.
        Страна ~ {props.country}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>

  )
}

export default Home