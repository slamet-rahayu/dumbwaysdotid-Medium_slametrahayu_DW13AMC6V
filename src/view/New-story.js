import React, {Component} from 'react';
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
import Profile from './Popover';


function Home () {
return (
<div>
<div className="header-box">
<div className="header">

    <Navbar expand="lg">
  <Navbar.Brand href="/home"><img src={Medium} alt="medium" width="45px" height="45px"></img> Draft</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Button variant="success btn-sm">Publish</Button>
      &nbsp;&nbsp;&nbsp;
    <h4 style={{marginTop:"5px",marginRight:"20px"}}><i class="fa fa-ellipsis-h"></i></h4>
    <h4 style={{marginTop:"5px",marginRight:"20px"}}><i class="fa fa-bell"></i></h4> 
      <Profile />
  </Navbar.Collapse>
</Navbar>
</div>
<hr></hr>

</div>
<div className="content">

<Row>
    <Col lg={2}>
    </Col>
    <Col lg={8}>
        <textarea className="story" placeholder="Tell your Story . . ." />
    </Col>
    <Col lg={2}>
    </Col>
</Row>

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