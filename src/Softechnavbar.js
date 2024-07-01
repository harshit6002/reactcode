import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Softechnavbar() {
  return (
    <div>
        <Navbar style={{backgroundColor:"grey",color:"white"}} sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#home"> Student Corner </Nav.Link>
            <Nav.Link href="#link"> Contact us </Nav.Link>
            <Nav.Link href="#home"> Login </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
    </div>
  )
}

export default Softechnavbar;