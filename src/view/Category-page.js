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
import Profile from './Popover';

function Home () {
return (
<Container>
<Navbar expand="lg">
  <Navbar.Brand href="/home"><img src={Medium} alt="medium" width="45px" height="45px" style={{marginLeft:"-100%"}}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <h4 style={{marginTop:"5px",marginRight:"20px"}}><i class="fa fa-search"></i></h4>
    <h4 style={{marginTop:"5px",marginRight:"20px"}}><i class="fa fa-bell"></i></h4>
      <Button variant="outline-dark btn-sm">Upgrade</Button>
      &nbsp;&nbsp;&nbsp;
     <Profile />
  </Navbar.Collapse>
</Navbar>

<Row>
    <Col lg={3} style={{marginLeft:"-2%"}}>
    <p style={{fontSize:"60px"}}>One Zero</p>
    </Col>
    <Col>
    <p style={{marginTop:"4%",marginRight:"50%",marginLeft:"-3%",fontWeight:"bold"}}><color style={{color:"purple"}}>The front lines of the future.</color> A Medium publication about tech and science</p>
    <Button type="button" variant="outline-success btn-sm" style={{float:"right",marginTop:"-5%"}}>follow</Button>
    </Col>
</Row>
<br></br>
<Row>
    <Col style={{background:"purple",width:"100px"}}>
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
    <Col style={{background:"purple",marginLeft:"-0.7%"}}>
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
    <div style={{marginLeft:"-2%",marginRight:"-1%"}}>
    <img src={Pixel} alt="pixel" style={{width:"100%"}}></img>
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
    <div style={{marginLeft:"-2%",marginRight:"-1%"}}>
    <img src={Pixel} alt="pixel" style={{width:"100%"}}></img>
    </div>
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