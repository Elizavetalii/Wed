import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export const Header = () => {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">FlowerLy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Дом</Nav.Link>
              <Nav.Link href="/flower">Цветы</Nav.Link>
              <Nav.Link href="/sweets">Полезное</Nav.Link>
              <Nav.Link href="/overlay">Корзина</Nav.Link>
  
              <NavDropdown title="Меню" id="basic-nav-dropdown">
                <NavDropdown.Item href="/action">Акции</NavDropdown.Item>
                <NavDropdown.Item href="/favorites">Избранное</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/information">
                  Информация
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header
