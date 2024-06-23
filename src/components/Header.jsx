import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {

  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">FlowerLy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Главная</Nav.Link>
              <NavDropdown title="Каталог" id="basic-nav-dropdown">
                <NavDropdown.Item href="/flower">Цветы</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/sweets"> Полезности</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/overlay">Корзина</Nav.Link>
              <Nav.Link href="/like">Избранное</Nav.Link>
              <Nav.Link href="/info">О товаре</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default Header
