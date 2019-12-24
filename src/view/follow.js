import React, {Component} from 'react';
import { Navbar, Nav, Button, Form, } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Medium from '../medium.png';
import '../App.css';
import Pixel from '../pixel.gif';
import Ps from '../ps.PNG';
import User from '../riyan.png';
import Tw from '../twitter.png';
import Fb from '../facebook.jpg';
import Bb from '../bookmark.png';
import Claps from '../claps.png';
import 'font-awesome/css/font-awesome.min.css';
import Fc from '../fcontent1.jpeg';
import Andy from '../andy.jpeg';
import Mission from '../mission.png';


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

    <div className="article">
        
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
        <p style={{fontSize:"12px",marginTop:"0",marginBottom:"0"}}>Andy Raskin in Mission.org</p>
        <p style={{fontSize:"13px",marginTop:"0",marginBottom:"0"}}>Sep 15, 2016 · 8 min read</p>
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
        <p style={{fontSize:"12px",marginTop:"0",marginBottom:"0"}}>Andy Raskin in Mission.org</p>
        <p style={{fontSize:"13px",marginTop:"0",marginBottom:"0"}}>Sep 15, 2016 · 8 min read</p>
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
        <p style={{fontSize:"12px",marginTop:"0",marginBottom:"0"}}>Andy Raskin in Mission.org</p>
        <p style={{fontSize:"13px",marginTop:"0",marginBottom:"0"}}>Sep 15, 2016 · 8 min read</p>
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
            <Button type="button" variant="outline-success btn-sm" style={{marginLeft:"120%",}} onClick={this.followToggler}>
                {this.state.status}
            </Button>
            </btnfollow>
        );
    }
}


export default Home;