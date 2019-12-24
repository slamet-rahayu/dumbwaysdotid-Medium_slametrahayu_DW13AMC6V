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
          <p>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</p>
          </Col>
          <Col lg={2} style={{marginLeft:"-10%",display:"inline-block"}}>
          <Button variant="outline-success btn-sm" style={{marginTop:"14px"}}>follow</Button>
          <i class="fa fa-angle-down" style={{fontSize:"30px",marginLeft:"5%"}}></i>
          </Col>
          <Col>
          <div className="profileLg"><p style={{fontSize:"80px"}}>R</p></div>
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col>
          <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <Nav.Link>Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>CLaps</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>Highlight</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>Response</Nav.Link>
        </Nav.Item>
        </Nav>
          </Col>
        </Row>
        <br></br>
        <Row>
            <Col>
            <b>Featured</b>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className="responses">
          <div>
            <div style={{paddingRight:"10px",float:"left"}}>
            <div className="profile">R</div>
            </div>
            <div>
            <text>
            <span>
              Anna Armstrong
            </span>
            <span>
              Jun 9, 2018
            </span>
            </text>
            </div>
            <div style={{marginTop:"3%",marginBottom:"3%"}}>
              <p style={{textAlign:"left"}}>
              NEWSFLASH! White men are not the only people who write books.
              This list is almost completely white male authors, writing about white men. 
              This list is a joke… consider reading books by people who don’t look like you and have different life experiences. 
              It might not be such a bad thing to be “outwardly focused” once in a while.
              </p>
            </div>
            <div>
              <icon>
                <i class="fa fa-sign-language"></i> 1K
              </icon>
              <div style={{float:"right"}}>
                <text style={{paddingRight:"8px"}}>2 Responses</text>
                <i class="fa fa-bookmark" style={{paddingRight:"8px"}}></i>
                <i class="fa fa-angle-down" style={{paddingRight:"8px"}}></i>
              </div>
            </div>
          </div>
        </div>
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