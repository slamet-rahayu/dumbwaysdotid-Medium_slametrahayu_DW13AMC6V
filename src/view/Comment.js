import React, {Component} from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Medium from '../medium.png';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import Mission from '../mission.png';
import 'font-awesome/css/font-awesome.css';



function Home () {
return (
<div>
<div className="header-box">
<div className="header">

    <Navbar expand="lg">
  <Navbar.Brand href="#home"><b>Medium</b></Navbar.Brand>
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
</div>
</div>
<div className="content">

    <div className="article">
        <b>Showing Responses for :</b>
        <div className="responses">
        <icon style={{float:"right",textIndent:"0.5em"}}>
        <i class="fa fa-sign-language"></i>
        &nbsp;
        54k
        <i class="fa fa-comment"></i>
        &nbsp;
        216
        </icon>
        <p>If You Only Read A Few Books In 2018, Read These</p>
        <p style={{marginTop:"-2%"}}>Ryan Holiday</p>
        </div>
              
    </div>


</div>

<div className="footer-top">
<div className="comment-section">
<br></br>
<p><b>Responses</b></p>
        <div className="commet-box">
        <input type="text" className="comment-text" />
        </div>
        <div style={{marginTop:"4%",background:"white"}}>

        <div className="responses">
        <icon style={{float:"right",textIndent:"0.5em"}}>
        <i class="fa fa-sign-language"></i>
        &nbsp;
        54k
        <i class="fa fa-comment"></i>
        &nbsp;
        216
        </icon>
        <p>If You Only Read A Few Books In 2018, Read These</p>
        <p style={{marginTop:"-2%"}}>Ryan Holiday</p>
        </div>
              
    </div>
</div>
</div>

</div>
);
}


export default Home;