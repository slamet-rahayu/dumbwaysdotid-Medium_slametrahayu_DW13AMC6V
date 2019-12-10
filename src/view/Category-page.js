import React from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Medium from '../medium.png';
import One from '../onezero.PNG';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Pixel from '../pixel.gif';
import Ps from '../ps.PNG';

function Home () {
return (
<Container>
<Navbar expand="lg">
  <Navbar.Brand href="#home" style={{fontWeight:"bold",fontSize:"30px"}}><img src={Medium} alt="medium" width="35px" height="35px"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
      <span style={{fontSize:"20px",marginRight:"10px"}}>&#128269;</span>  
      <span style={{fontSize:"25px",marginRight:"10px"}}>&#128365;</span>  
      <Button variant="outline-dark btn-sm">Upgrade</Button>
      &nbsp;&nbsp;&nbsp;
      <div className="profile"><p style={{marginTop:"-10px"}}></p>R</div>
  </Navbar.Collapse>
</Navbar>

<table cellPadding="12">
    <tr>
        <td><span>&lt;</span></td>
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
        <td><span>&gt;</span></td>
    </tr>
</table>

<Row>
    <Col lg={3}>
    <p style={{fontSize:"60px"}}>One Zero</p>
    </Col>
    <Col><p style={{marginTop:"4%",marginRight:"50%",marginLeft:"-3%",fontWeight:"bold"}}>The front lines of the future A Medium publication about tech and science</p></Col>
</Row>
<br></br>
<Row>
    <Col style={{background:"purple"}}>
    <img src={One} alt="one" style={{marginLeft:"-2%",float:"left"}}></img>
    <div>
        <p style={{color:"white",fontSize:"30px",textAlign:"center",marginTop:"5%"}}>The Forgotten Pixel Art Masterpieces of the PlayStation 1 Era</p>
        <p style={{color:"white",textAlign:"center",fontSize:"18px",marginTop:"-1%"}}>Video games simply can't made like this anymore</p>
        <p style={{color:"yellow",textAlign:"center"}}>Richmond Lee</p>
        <p style={{textAlign:"center",fontWeight:"bold",color:"white",marginTop:"-2%"}}>Dec 7 . 9 mins read</p>
    </div>
    </Col>
</Row>
<br></br><br></br>
<Row>
    <Col style={{background:"purple"}}>
    <img src={One} alt="one" style={{marginRight:"-2%",float:"right"}}></img>
    <div>
        <p style={{color:"white",fontSize:"30px",textAlign:"center",marginTop:"5%"}}>The Forgotten Pixel Art Masterpieces of the PlayStation 1 Era</p>
        <p style={{color:"white",textAlign:"center",fontSize:"18px",marginTop:"-1%"}}>Video games simply can't made like this anymore</p>
        <p style={{color:"yellow",textAlign:"center"}}>Richmond Lee</p>
        <p style={{textAlign:"center",fontWeight:"bold",color:"white",marginTop:"-2%"}}>Dec 7 . 9 mins read</p>
    </div>
    </Col>
</Row>
<br></br><br></br>
<Row>
    <Col style={{background:"purple"}}>
    <img src={One} alt="one" style={{marginLeft:"-2%",float:"left"}}></img>
    <div>
        <p style={{color:"white",fontSize:"30px",textAlign:"center",marginTop:"5%"}}>The Forgotten Pixel Art Masterpieces of the PlayStation 1 Era</p>
        <p style={{color:"white",textAlign:"center",fontSize:"18px",marginTop:"-1%"}}>Video games simply can't made like this anymore</p>
        <p style={{color:"yellow",textAlign:"center"}}>Richmond Lee</p>
        <p style={{textAlign:"center",fontWeight:"bold",color:"white",marginTop:"-2%"}}>Dec 7 . 9 mins read</p>
    </div>
    </Col>
</Row>
<br></br><br></br>
<Row>
    <Col>
    <div className="box1">
        <div className="text">
            <p style={{fontSize:"30px"}}>"Would you pay $1 million and fly to South America for a chance to live longer?”</p>
            <p>-Emily Mullin</p>
            <p>Alexa Is My Problematic Fave</p>
            <p>Dec 9 . 6 mins read</p>
        </div>
    </div>
    </Col>
</Row>
<br></br><br></br>
<Row>
    <Col>
    <img src={Pixel} alt="pixel" style={{width:"100%"}}></img>
    </Col>
</Row>
<br></br><br></br>
<Row>
    <Col style={{background:"purple"}}>
    <img src={One} alt="one" style={{marginLeft:"-2%",float:"left"}}></img>
    <div>
        <p style={{color:"white",fontSize:"30px",textAlign:"center",marginTop:"5%"}}>The Forgotten Pixel Art Masterpieces of the PlayStation 1 Era</p>
        <p style={{color:"white",textAlign:"center",fontSize:"18px",marginTop:"-1%"}}>Video games simply can't made like this anymore</p>
        <p style={{color:"yellow",textAlign:"center"}}>Richmond Lee</p>
        <p style={{textAlign:"center",fontWeight:"bold",color:"white",marginTop:"-2%"}}>Dec 7 . 9 mins read</p>
    </div>
    </Col>
</Row>
<br></br><br></br>
<Row>
    <Col>
    <img src={Pixel} alt="pixel" style={{width:"100%"}}></img>
    </Col>
</Row>
<Row>
    <Col></Col>
    <Col lg={8}>
        <hr></hr>
    <Row>
        <Col lg={9}>
        <p style={{fontSize:"20px"}}>How the PlayStation Took Over the World</p>
        <p style={{fontSize:"18px",display:"inline"}}>Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?</p>
        </Col>
        <Col lg={3}>
        <img src={Ps} alt="Ps"></img>
        </Col>
    </Row>
    <hr></hr>
    <Row>
        <Col lg={9}>
        <p style={{fontSize:"20px"}}>How the PlayStation Took Over the World</p>
        <p style={{fontSize:"18px",display:"inline"}}>Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?</p>
        </Col>
        <Col lg={3}>
        <img src={Ps} alt="Ps"></img>
        </Col>
    </Row>
    <hr></hr>
    <Row>
        <Col lg={9}>
        <p style={{fontSize:"20px"}}>How the PlayStation Took Over the World</p>
        <p style={{fontSize:"18px",display:"inline"}}>Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?</p>
        </Col>
        <Col lg={3}>
        <img src={Ps} alt="Ps"></img>
        </Col>
    </Row>
    <hr></hr>
    <Row>
        <Col lg={9}>
        <p style={{fontSize:"20px"}}>How the PlayStation Took Over the World</p>
        <p style={{fontSize:"18px",display:"inline"}}>Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?</p>
        </Col>
        <Col lg={3}>
        <img src={Ps} alt="Ps"></img>
        </Col>
    </Row>
    <hr></hr>
    <Row>
        <Col lg={9}>
        <p style={{fontSize:"20px"}}>How the PlayStation Took Over the World</p>
        <p style={{fontSize:"18px",display:"inline"}}>Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?</p>
        </Col>
        <Col lg={3}>
        <img src={Ps} alt="Ps"></img>
        </Col>
    </Row>
    <hr></hr>
    <Row>
        <Col lg={9}>
        <p style={{fontSize:"20px"}}>How the PlayStation Took Over the World</p>
        <p style={{fontSize:"18px",display:"inline"}}>Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?</p>
        </Col>
        <Col lg={3}>
        <img src={Ps} alt="Ps"></img>
        </Col>
    </Row>
    <hr></hr>
    <Row>
        <Col lg={9}>
        <p style={{fontSize:"20px"}}>How the PlayStation Took Over the World</p>
        <p style={{fontSize:"18px",display:"inline"}}>Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?</p>
        </Col>
        <Col lg={3}>
        <img src={Ps} alt="Ps"></img>
        </Col>
    </Row>
    <hr></hr>
    <Row>
        <Col lg={9}>
        <p style={{fontSize:"20px"}}>How the PlayStation Took Over the World</p>
        <p style={{fontSize:"18px",display:"inline"}}>Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?</p>
        </Col>
        <Col lg={3}>
        <img src={Ps} alt="Ps"></img>
        </Col>
    </Row>
    </Col>
    <Col></Col>
</Row>

<hr></hr>
<p style={{textAlign:"right"}}>About OneZero · About Medium · Terms · Privacy</p>
</Container>
);
}

export default Home;