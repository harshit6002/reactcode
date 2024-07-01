import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Softechheader2.css';

function Softechheader2() {
  return (
    <div>
      
       <h2 style={{fontFamily:"Cambria ,Cochin, Georgia, Times, 'Times New Roman', serif" , textAlign:"center", color:"ThreeDDarkShadow"}}>Softech Infoways </h2>
      
       
          <Container>
      <Row md={5}>
        <Col > <Nav.Link href="#home"> <b> Home </b> </Nav.Link> </Col>
        <Col> <Nav.Link href="#home"><b>About us</b></Nav.Link> </Col>
        <Col> <Nav.Link href="#home"><b>Student corner</b></Nav.Link> </Col>
        <Col> <Nav.Link href="#home"><b>Contact us</b></Nav.Link> </Col>
        <Col> <Nav.Link href="#home"><b>Login</b></Nav.Link> </Col>
      </Row>
    </Container>
    <br/>
    </div>

  )
}

export default Softechheader2;