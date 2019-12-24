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
        <textarea className="comment-text">
        </textarea>
        <Button variant="success" size="sm"> Submit </Button>
        </div>
        <div style={{marginTop:"4%",background:"white"}}>

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
    </div>
</div>
</div>

</div>
);
}


export default Home;