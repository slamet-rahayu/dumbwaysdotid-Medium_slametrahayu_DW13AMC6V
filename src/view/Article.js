import React from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Medium from '../medium.png';
import One from '../onezero.PNG';
import '../App.css';
import Pixel from '../pixel.gif';
import Ps from '../ps.PNG';
import Mission from '../mission.png';
import Book from '../book.jpeg';
import User from '../riyan.png';
import Tw from '../twitter.png';
import Fb from '../facebook.jpg';
import Bb from '../bookmark.png';
import Claps from '../claps.png';
import 'font-awesome/css/font-awesome.min.css';
import Fc from '../fcontent1.jpeg';
import Andy from '../andy.jpeg';


function Home () {
return (
<div>
<div className="header-box">
<div className="header">

    <Navbar expand="lg">
  <Navbar.Brand href="#home"><img src={Medium} alt="medium" width="45px" height="45px"></img></Navbar.Brand>
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
<hr></hr>

<div className="header" >
<div style={{paddingBottom:"1%"}}>
<img src={Mission} alt="mission" width="18%" height="100%" style={{marginLeft:"1.5%",marginTop:"-0.5%"}}></img>
&nbsp;&nbsp;&nbsp;
MISSION ORIGINALS | SUBSCRIBE
</div>
</div>
</div>
<div className="content">
    <img src={Book} alt="book" width="100%"></img>
    <br></br>
    <p style={{marginLeft:"50%",marginTop:"1%",textDecoration:"underline"}}>Books</p>

    <div className="article">
        <p style={{fontSize:"40px"}}>
        If You Only Read A Few Books In 2018, Read These
        </p>
        <div className="user">
        <table>
            <tr>
                <td>
                <img src={User} alt="user" style={{borderRadius:"100%",width:"48px",height:"48px",marginTop:"-40%"}}></img>
                </td>
                <td>
                <text>Ryan holiday&nbsp;&nbsp;</text><button type="button" className="btn-follow">follow</button>
                <p>Jun 26, 2018 . 10 min read</p>
                </td>
                <td width="65%">
                <img src={Tw} alt="Twitter" width="25px" height="25px" style={{float:"right"}}></img>
                <img src={Fb} alt="facebook" width="25px" height="25px" style={{float:"right"}}></img>
                <img src={Bb} alt="Bookmark" width="25px" height="25px" style={{float:"right"}}></img>
                </td>
            </tr>
        </table>
        </div>
        <p style={{fontSize:"21px"}}>If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused, where should you start?</p>
        <p style={{fontSize:"21px"}}>To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.</p>
        <p style={{fontSize:"21px"}}>
           Deep Work: Rules for Focused Success in a Distracted World by Cal Newport Media consumption went way up in 2017.
           For most of us, that meant happiness and productivity went way down. 
           The world is becoming noisier and will become more so every day. 
           If you can’t cultivate the ability to have quiet, insightful, deeply focused periods of productive work, 
           you’re going to get screwed. This is a book that explains how to cultivate and protect that skill — the ability to do deep work. 
           I strongly urge you to begin this practice in 2018— if you want to get anything done or perform your best.
        </p>
        <br></br>
        <p style={{fontSize:"21px"}}>
        The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson To me, 
        practical philosophy has always been the art knowing what to — and what not to — give a fuck about. 
        That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. 
        Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. 
        Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. 
        If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.
        </p>
        <br></br>
        <p style={{fontSize:"21px"}}>
        The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson To me, 
        practical philosophy has always been the art knowing what to — and what not to — give a fuck about. 
        That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. 
        Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. 
        Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. 
        If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.
        </p>
        <br></br>
        <p style={{fontSize:"21px"}}>
        The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson To me, 
        practical philosophy has always been the art knowing what to — and what not to — give a fuck about. 
        That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. 
        Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. 
        Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. 
        If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.
        </p>
        <br></br>
        <p style={{fontSize:"21px"}}>
        The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson To me, 
        practical philosophy has always been the art knowing what to — and what not to — give a fuck about. 
        That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. 
        Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. 
        Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. 
        If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.
        </p>
        <br></br>
        <p style={{fontSize:"34px",fontWeight:"bold"}}>Like To Read?</p>
        <p style={{fontSize:"21px"}}>I’ve created a list of 15 books you’ve never heard of that will alter your worldview and help you excel at your career.</p>
        <br></br><br></br>
        <p style={{fontSize:"21px",textDecoration:"underline"}}>Get the secret book list here!</p>
        <p style={{fontWeight:"bold",fontSize:"21px",letterSpacing:"0.6em",textAlign:"center"}}>...</p>
        <p style={{fontSize:"21px",marginTop:"10%"}}>This originally appeared on Thought Catalog.</p>
        <div className="response">
        <button className="tombol" style={{marginRight:"10px"}}>Books</button>
        <button className="tombol" style={{marginRight:"10px"}}>Self Improvement</button>
        <button className="tombol" style={{marginRight:"10px"}}>Productivity</button>
        <button className="tombol" style={{marginRight:"10px"}}>Life</button>
        <button className="tombol" style={{marginRight:"10px"}}>Life Lessons</button>
        </div>
        <div className="claps">
        <img src={Claps} width="55px" height="60px" style={{borderRadius:"100%"}}></img>
        <text style={{marginLeft:"1%"}}>54K claps</text>
        </div>
        <div className="social">
        <table cellPadding="5px">
            <tr>
                <td>
                <img src={Tw} alt="Twitter" width="25px" height="25px"></img>
                </td>
                <td>
                <img src={Fb} alt="facebook" width="25px" height="25px"></img>
                </td>
                <td>
                <img src={Bb} alt="Bookmark" width="25px" height="25px"></img>
                </td>
            </tr>
        </table>
        </div>
        <hr></hr>
        <div className="author">
        <img src={User} alt="user" style={{borderRadius:"100%",float:"left",display:"inline"}}></img>
        <div style={{marginLeft:"15%",marginRight:"20%"}}>
        WRITTEN BY
        <Button type="button" variant="outline-success btn-sm" style={{marginLeft:"100%"}}>follow</Button>
        <p style={{fontSize:"25px",fontWeight:"bold"}}>Riyan Holiday</p>
        <p>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</p>
        </div>
        <img src={User} alt="user" style={{borderRadius:"100%",float:"left",display:"inline"}}></img>
        <div style={{marginLeft:"15%",marginRight:"20%"}}>
        
        <Button type="button" variant="outline-success btn-sm" style={{marginLeft:"100%"}}>follow</Button>
        <p style={{fontSize:"25px",fontWeight:"bold"}}>Mission.org</p>
        <p>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</p>
        </div>
        <hr></hr>
        </div> 
        <Button variant="outline-success btn-lg" style={{width:"100%"}}>See Responses (216)</Button>       
    </div>


</div>

<div className="footer-top">
<div className="footer-content">
<h5> More from Medium</h5>
<hr></hr>
<Row>
    <Col>
    <p>More from mission.org</p>
    <img src={Fc}></img>
    <p style={{fontSize:"24px"}}>The Greatest Sales Deck I’ve Ever Seen</p>
    <Row>
        <Col>
        <img src={Andy} alt="andy" style={{borderRadius:"100%"}}></img>
        </Col>
        <Col style={{marginLeft:"-30%"}}>
        <p style={{fontSize:"12px"}}>Andy Raskin in Mission.org</p>
        <p style={{fontSize:"13px"}}>Sep 15, 2016 · 8 min read</p>
        </Col>
        <Col style={{float:"right"}}>
        <img src={Claps} width="30px" height="40px" style={{borderRadius:"100%"}}></img> 88K | 
        <img src={Bb} alt="Bookmark" width="25px" height="25px"></img>
        </Col>
    </Row>
    </Col>
    <Col>
    <p>More from mission.org</p>
    <img src={Fc}></img>
    <p style={{fontSize:"24px"}}>The Greatest Sales Deck I’ve Ever Seen</p>
    <Row>
        <Col>
        <img src={Andy} alt="andy" style={{borderRadius:"100%"}}></img>
        </Col>
        <Col style={{marginLeft:"-30%"}}>
        <p style={{fontSize:"12px"}}>Andy Raskin in Mission.org</p>
        <p style={{fontSize:"13px"}}>Sep 15, 2016 · 8 min read</p>
        </Col>
        <Col style={{float:"right"}}>
        <img src={Claps} width="30px" height="40px" style={{borderRadius:"100%"}}></img> 88K | 
        <img src={Bb} alt="Bookmark" width="25px" height="25px"></img>
        </Col>
    </Row>
    </Col>
    <Col>
    <p>More from mission.org</p>
    <img src={Fc}></img>
    <p style={{fontSize:"24px"}}>The Greatest Sales Deck I’ve Ever Seen</p>
    <Row>
        <Col>
        <img src={Andy} alt="andy" style={{borderRadius:"100%"}}></img>
        </Col>
        <Col style={{marginLeft:"-30%"}}>
        <p style={{fontSize:"12px"}}>Andy Raskin in Mission.org</p>
        <p style={{fontSize:"13px"}}>Sep 15, 2016 · 8 min read</p>
        </Col>
        <Col style={{float:"right"}}>
        <img src={Claps} width="30px" height="40px" style={{borderRadius:"100%"}}></img> 88K | 
        <img src={Bb} alt="Bookmark" width="25px" height="25px"></img>
        </Col>
    </Row>
    </Col>
</Row>
</div>
</div>
<div className="footer-bottom">

</div>
</div>
);
}

export default Home;