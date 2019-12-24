import React from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Med from '../med.png';
import Med1 from '../med1.png';
import Sail from '../sail.png';
import art from '../react.png';
import '../App.css';
import Onezero from './Category-page';
import Article from './Article';
import Register from '../App';

function Home () {
return (
<Container>
<Navbar expand="lg">
  <Navbar.Brand href="#home" style={{fontWeight:"bold",fontSize:"30px"}}>Medium</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <h4 style={{marginTop:"5px",marginRight:"20px"}}><i class="fa fa-search"></i></h4>
    <h4 style={{marginTop:"5px",marginRight:"20px"}}><i class="fa fa-bell"></i></h4>
    <div></div><Register />
    &nbsp;&nbsp;&nbsp;
      
  </Navbar.Collapse>
</Navbar>

<table cellPadding="12">
    <tr>
        <Router>
        <td>&lt;</td>
        <td><a href="/Home">HOME</a></td>
        <td><a href="/Onezero" >ONEZERO</a></td>
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
        <td>&gt;</td>
        </Router>
    </tr>
</table>
<br></br>

<Row>
    <Col>
    <img src={Med} style={{marginLeft:"-10%"}} alt="med"></img>
    <h4 style={{marginTop:"10px"}}><a href="/Article">Do Not Give Up Cofee</a></h4>
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
<a href="!#" style={{marginLeft:"85%"}}> SEE ALL FEATURED &gt;</a>
<hr></hr>
<Row>
    <Col md={10}>
    <Row>
    <Col lg={7}>
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
    <Col lg={7}>
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
    <Col lg={7}>
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
    <Col lg={7}>
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
    <Col lg={7}>
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
</Row>
    </Col>
    <Col>
    <div style={{position:"absolute",marginLeft:"-70%"}}>
        <h4><b>Popular On medium</b></h4><hr></hr>
    <Row>
        <Col>
        <Row>
            <Col>
            <p style={{color:"grey",fontSize:"30px"}}>01</p>
            </Col>
            <Col>
            <p style={{marginLeft:"-90%",marginTop:"6%"}}><b>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</b></p>
            <p style={{fontSize:"13px",marginLeft:"-90%",marginTop:"-10%"}}>Corinne Purtill in OneZero</p>
            <p style={{fontSize:"12px",marginLeft:"-90%",marginTop:"-10%"}}>Nov 26 . 6 min read</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <p style={{color:"grey",fontSize:"30px"}}>02</p>
            </Col>
            <Col>
            <p style={{marginLeft:"-90%",marginTop:"6%"}}><b>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</b></p>
            <p style={{fontSize:"13px",marginLeft:"-90%",marginTop:"-10%"}}>Corinne Purtill in OneZero</p>
            <p style={{fontSize:"12px",marginLeft:"-90%",marginTop:"-10%"}}>Nov 26 . 6 min read</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <p style={{color:"grey",fontSize:"30px"}}>03</p>
            </Col>
            <Col>
            <p style={{marginLeft:"-90%",marginTop:"6%"}}><b>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</b></p>
            <p style={{fontSize:"13px",marginLeft:"-90%",marginTop:"-10%"}}>Corinne Purtill in OneZero</p>
            <p style={{fontSize:"12px",marginLeft:"-90%",marginTop:"-10%"}}>Nov 26 . 6 min read</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <p style={{color:"grey",fontSize:"30px"}}>04</p>
            </Col>
            <Col>
            <p style={{marginLeft:"-90%",marginTop:"6%"}}><b>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</b></p>
            <p style={{fontSize:"13px",marginLeft:"-90%",marginTop:"-10%"}}>Corinne Purtill in OneZero</p>
            <p style={{fontSize:"12px",marginLeft:"-90%",marginTop:"-10%"}}>Nov 26 . 6 min read</p>
            </Col>
        </Row>
        <Row>
            <Col><hr></hr></Col>
        </Row>
        <Row>
            <Col lg={2}><p style={{fontSize:"13px"}}>Help</p></Col>
            <Col lg={2}><p style={{fontSize:"13px"}}>Status</p></Col>
            <Col lg={2}><p style={{fontSize:"13px"}}>Writers</p></Col>
            <Col lg={2}><p style={{fontSize:"13px"}}>Blog</p></Col>
            <Col><p style={{fontSize:"13px"}}>Careers</p></Col>
        </Row>
        <Row>
            <Col lg={2}><p style={{fontSize:"13px"}}>Privacy</p></Col>
            <Col lg={2}><p style={{fontSize:"13px"}}>Terms</p></Col>
            <Col lg={2}><p style={{fontSize:"13px"}}>About</p></Col>
        </Row>
        </Col>
    </Row>

    </div>
    </Col>
</Row>



</Container>



);
}

export default Home;