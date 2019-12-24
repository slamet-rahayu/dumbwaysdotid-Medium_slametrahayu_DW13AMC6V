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
        Bookmarks
        </b></h2>
        <br></br>
        <div className="responses">
        
        <div style={{margin:"0px 10px 10px 10px"}}>
        <Button variant="dark" style={{float:"right",marginTop:"1%"}}>
            Upgrade
        </Button>
        <i class="fa fa-bookmark" style={{fontSize:"35px"}}></i>
        <line style={{fontSize:"35px",paddingLeft:"10px"}}>|</line>
        <text style={{fontSize:"40px",fontWeight:"bold",paddingLeft:"10px"}}>Offline reading is here</text>
        </div>
        </div>
        </Col>
    </Row>
</div>
</div>
);
}




export default Home;