import React, {Component} from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Medium from '../medium.png';
import '../App.css';
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
import Profile from './Popover';
import Content from '../components/articles'
import Image from '../components/articleimage'
import Title from '../components/articletitle'
import Related from '../components/relatedarticle'


function Home () {
return (
<div>
<div className="header-box">
<div className="header">

    <Navbar expand="lg">
  <Navbar.Brand href="/home"><img src={Medium} alt="medium" width="45px" height="45px"></img></Navbar.Brand>
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
    <Image />
    <br></br>
    <p style={{marginLeft:"50%",marginTop:"1%",textDecoration:"underline"}}>Books</p>

    <div className="article">
        <Title />
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
        <Content />
        
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
        <Follow />
        <profile >
        <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"-35px"}}>Riyan Holiday</p>
        <p style={{marginTop:"-20px"}}>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</p>
        </profile>
        </div>
        <br></br><br></br>
        <img src={User} alt="user" style={{borderRadius:"100%",float:"left",display:"inline"}}></img>
        <div style={{marginLeft:"15%",marginRight:"20%"}}>
        
        <Follow />
        <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"-35px"}}>Riyan Holiday</p>
        <p style={{marginTop:"-20px"}}>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</p>
        </div>
        <br></br><br></br>
        <hr></hr>
        </div> 
        <Button variant="outline-success btn-lg" style={{width:"100%"}} href="/Comments">See Responses (216)</Button>       
    </div>


</div>

<div className="footer-top">
<div className="footer-content">
<h5> More from Medium</h5>
<hr></hr>
    <Related />
</div>
</div>
<div className="footer-bottom">
<div className="footer-content-bottom">
    <Row>
        <Col>
        <p style={{fontSize:"21.6px",fontWeight:"bold"}}>Discover Medium</p>
        <p>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
        </Col>
        <Col>
        <p style={{fontSize:"21.6px",fontWeight:"bold"}}>Discover Medium</p>
        <p>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
        </Col>
        <Col>
        <p style={{fontSize:"21.6px",fontWeight:"bold"}}>Discover Medium</p>
        <p>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
        </Col>
    </Row>
<hr color="white"></hr>
<br></br>
<div style={{width:"100%"}}>
<p style={{fontWeight:"bold",fontSize:"30px"}}>Medium</p>
<text style={{textAlign:"right",marginLeft:"83%",marginTop:"-4%",position:"absolute"}}>About Help Legal</text>
</div>

</div>

</div>
</div>
);
}

class Follow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : "follow",
            count : 1
        }
        this.followToggler = this.followToggler.bind(this)
    }

    followToggler () {
        if (this.state.count%2 == 1) {
            var statusBaru = "unfollow"
        } else {
            var statusBaru = "follow"
        }
        this.setState({status : statusBaru})
        this.setState({count : this.state.count+1})
    }

    render () {
        return (
            <btnfollow>
            <Button type="button" variant="outline-success btn-sm" style={{marginLeft:"120%"}} onClick={this.followToggler}>
                {this.state.status}
            </Button>
            </btnfollow>
        );
    }
}
export default Home;