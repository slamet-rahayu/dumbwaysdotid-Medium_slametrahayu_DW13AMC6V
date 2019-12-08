import React from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Med from '../med.png';
import Med1 from '../med1.png';
import Sail from '../sail.png';
import art from '../react.png';
import '../App.css';

function Home () {
return (
<Container>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" style={{fontWeight:"bold",fontSize:"30px"}}>Medium</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Form inline>
      <Button variant="outline-dark btn-sm">Upgrade</Button>
      &nbsp;&nbsp;&nbsp;
      <div className="profile">R</div>
    </Form>
  </Navbar.Collapse>
</Navbar>

<table cellPadding="12">
    <tr>
        <td></td>
        <td>HOME</td>
        <td>ONEZERO</td>
        <td>ELEMENTAL</td>
        <td>GEN</td>
        <td>ZORA</td>
        <td>FORGE</td>
        <td>HUMAN PARTS</td>
        <td>MARKER</td>
        <td>LEVEL</td>
        <td>HEATED</td>
        <td>MODUS</td>
        <td>MORE</td>
        <td></td>
    </tr>
</table>

<Row>
    <Col>
    <img src={Med} style={{marginLeft:"-10%"}} alt="med"></img>
    <h4 style={{marginTop:"10px"}}>Do Not Give Up Cofee</h4>
    <p style={{fontSize:"14px",color:"gray"}}>Both regular and decaf boost your health</p>
    <p style={{fontSize:"14px"}}>Rahul Naidoo in Elemental</p>
    <p style={{fontSize:"13px",marginTop:"-14px",color:"gray"}}>Sep 30 . 3mins read</p>
    </Col>
    <Col>
    <Row>
        <Col>
        <img src={Sail} alt="sail" style={{display:"block",float:"left",marginLeft:"-50px",paddingRight:"10px"}}></img>
        <p><b>The Economics of the Boomers</b></p>
        <p style={{fontSize:"13px",marginTop:"-15px"}}>Ameriaca is getting older indebetness</p>
        <p style={{fontSize:"13px"}}>Bryne Hobart in Marker</p>
        <p style={{fontSize:"13px",marginTop:"-10px"}}>Dec 6 . 3 min read</p>
        </Col>
    </Row>
    <br></br>
    <Row>
        <Col>
        <img src={Sail} alt="sail" style={{display:"block",float:"left",marginLeft:"-50px",paddingRight:"10px"}}></img>
        <p><b>The Economics of the Boomers</b></p>
        <p style={{fontSize:"13px",marginTop:"-15px"}}>Ameriaca is getting older indebetness</p>
        <p style={{fontSize:"13px"}}>Bryne Hobart in Marker</p>
        <p style={{fontSize:"13px",marginTop:"-10px"}}>Dec 6 . 3 min read</p>
        </Col>
    </Row>
    <br></br>
    <Row>
        <Col>
        <img src={Sail} alt="sail" style={{display:"block",float:"left",marginLeft:"-50px",paddingRight:"10px"}}></img>
        <p><b>The Economics of the Boomers</b></p>
        <p style={{fontSize:"13px",marginTop:"-15px"}}>Ameriaca is getting older indebetness</p>
        <p style={{fontSize:"13px"}}>Bryne Hobart in Marker</p>
        <p style={{fontSize:"13px",marginTop:"-10px"}}>Dec 6 . 3 min read</p>
        </Col>
    </Row>
    </Col>
    <Col>
    <img src={Med1} style={{marginRight:"-100px"}} alt="med1"></img>
    <h4 style={{marginTop:"10px"}}>Do Not Give Up Cofee</h4>
    <p style={{fontSize:"14px",color:"gray"}}>Both regular and decaf boost your health</p>
    <p style={{fontSize:"14px"}}>Rahul Naidoo in Elemental</p>
    <p style={{fontSize:"13px",marginTop:"-14px",color:"gray"}}>Sep 30 . 3mins read</p>
    </Col>
</Row>
<a href="!#" style={{marginLeft:"85%"}}> SEE ALL FEATURED</a>
<hr></hr>
<br></br>
<p style={{fontSize:"20px",position:"absolute",marginLeft:"60%"}}><b>Popular On Medium<hr></hr></b></p>
<Row>
    <Col lg={6}>
        <p>BASED ON YOUR READING HISTORY</p>
        <p style={{fontSize:"18px"}}><b>React Authentication With Twitter, Google, Facebook and Github</b></p>
        <p>
        In a previous post, I went over an approach you could take to authenticate your React app with Twitter. The obvious next step is to add…
        </p>
        <p>Jul 30, 2018 . 9 min read</p>
    </Col>
    <Col>
    <img src={art} alt="art"></img>
    </Col>
    <Col>
        
    </Col>
</Row>

<Row>
    <Col lg={6}>
        <p>BASED ON YOUR READING HISTORY</p>
        <p style={{fontSize:"18px"}}><b>React Authentication With Twitter, Google, Facebook and Github</b></p>
        <p>
        In a previous post, I went over an approach you could take to authenticate your React app with Twitter. The obvious next step is to add…
        </p>
        <p>Jul 30, 2018 . 9 min read</p>
    </Col>
    <Col>
    <img src={art} alt="art"></img>
    </Col>
    <Col>
     
    </Col>
</Row>
<Row>
    <Col lg={6}>
        <p>BASED ON YOUR READING HISTORY</p>
        <p style={{fontSize:"18px"}}><b>React Authentication With Twitter, Google, Facebook and Github</b></p>
        <p>
        In a previous post, I went over an approach you could take to authenticate your React app with Twitter. The obvious next step is to add…
        </p>
        <p>Jul 30, 2018 . 9 min read</p>
    </Col>
    <Col>
    <img src={art} alt="art"></img>
    </Col>
    <Col>
        
    </Col>
</Row>
<Row>
    <Col lg={6}>
        <p>BASED ON YOUR READING HISTORY</p>
        <p style={{fontSize:"18px"}}><b>React Authentication With Twitter, Google, Facebook and Github</b></p>
        <p>
        In a previous post, I went over an approach you could take to authenticate your React app with Twitter. The obvious next step is to add…
        </p>
        <p>Jul 30, 2018 . 9 min read</p>
    </Col>
    <Col>
    <img src={art} alt="art"></img>
    </Col>
    <Col>
        
    </Col>
</Row>
<Row>
    <Col lg={6}>
        <p>BASED ON YOUR READING HISTORY</p>
        <p style={{fontSize:"18px"}}><b>React Authentication With Twitter, Google, Facebook and Github</b></p>
        <p>
        In a previous post, I went over an approach you could take to authenticate your React app with Twitter. The obvious next step is to add…
        </p>
        <p>Jul 30, 2018 . 9 min read</p>
    </Col>
    <Col>
    <img src={art} alt="art"></img>
    </Col>
    <Col>
        
    </Col>
</Row>



</Container>



);
}

export default Home;