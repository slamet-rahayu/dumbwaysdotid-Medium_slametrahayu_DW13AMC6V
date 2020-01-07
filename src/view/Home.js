import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Med from '../med.png';
import Med1 from '../med1.png';
import Sail from '../sail.png';
import art from '../react.png';
import '../App.css';
import Register from '../App';
import Login from './Login';
import Category from '../components/Category';
import Popular from '../components/Popular';
import Recent from '../components/RecentArticle';

function Home () {
return (
<Container>
<Navbar expand="lg">
<Navbar.Brand href="#home" style={{fontWeight:"bold",fontSize:"30px"}}>{Auth()}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <h4 style={{marginTop:"5px",marginRight:"20px"}}><i class="fa fa-search"></i></h4>
    <h4 style={{marginTop:"5px",marginRight:"20px"}}><i class="fa fa-bell"></i></h4>
    <div></div><Register />&nbsp;&nbsp;<Login />
    &nbsp;&nbsp;&nbsp;
      
  </Navbar.Collapse>
</Navbar>
<Category />
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
    <Col lg={4}>
    <div>
        <h4><b>Popular On medium</b></h4>
        <hr></hr>
    <Row>
        <Col>
        <Popular />
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
    <Col lg={8}>
    <Recent />
    </Col>
</Row>
</Container>

);
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

function Auth () {
    if ((token && user) === null) {
        return(
            <div>Medium</div>
        )
    } else {
        return(
            <div>Medium</div>
        )
    }
}

export default Home;