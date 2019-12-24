import React, {Component} from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Medium from '../medium.png';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import Mission from '../mission.png';
import 'font-awesome/css/font-awesome.css';
import Profile from './Popover';




function Home () {
return (
<div>
<div className="header-box">
<div className="header">

<Navbar expand="lg">
  <Navbar.Brand href="/home"><h2><b>Medium</b></h2></Navbar.Brand>
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
</div>
</div>
<div className="content">
    <br></br>
    <Row>
        <Col>
        <div className="article">
        <Row>
          <Col lg={5}>
          <p style={{fontWeight:"bold",fontSize:"34px",marginRight:"10%"}}>Slamet Rahayu</p>
          <p>1 Following</p>
          </Col>
          <Col lg={2}>
          <Button variant="outline-dark btn-sm" style={{marginTop:"14px"}}>Edit Profile</Button>
          </Col>
          <Col>
          <div className="profileLg"><p style={{fontSize:"80px"}}>R</p></div>
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col>
          <p>Slamet Rahayu hasn’t been active on Medium yet. Check back later to see their stories, claps, and highlights.</p>
          </Col>
        </Row>
        </div>
        </Col>
    </Row>
</div>
</div>
);
}

export default Home;