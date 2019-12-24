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
        <h2><b>
        Stats
        </b></h2>
        <br></br>
        <p style={{float:"right"}}>Learn more about using stats</p>
        <p style={{fontSize:"20px"}}>Click story below to view detailed stats</p>
        </Col>
    </Row>
    <Row>
        <Col>
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <Nav.Link>
            <h1><b>0</b></h1>
            <p>Views (30 Days)</p>
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>
            <h1><b>0</b></h1>
            <p>Reads (30 Days)</p>
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>
            <h1><b>0</b></h1>
            <p>Fans (30 Days)</p>
        </Nav.Link>
        </Nav.Item>
        </Nav>
        </Col>
    </Row>
</div>
</div>
);
}




export default Home;