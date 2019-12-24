import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import '../App.css';
import '../App';
import {Route, BrowserRouter} from 'react-router-dom';
import Apps from '../App';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>hello</h4>
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
      <a href="!#" onClick={props.onHide} style={{marginLeft:"94%",marginTop:"-15px",position:"absolute",fontSize:"25px",color:"black"}}>&times;</a>
          <div className="loginbox">
        {/* <Modal.Title id="contained-modal-title-vcenter">
          <h4>hello</h4>
        </Modal.Title> */}
        <h3 align="center"><b>Sign in with Email</b></h3>
        
        <p style={{fontSize:"15px",color:"grey",textAlign:"center"}}>Enter the email address associated with your account,<br></br> and we’ll send a magic link to your inbox.
        </p><br></br><br></br>
        <center>
            <Form />
        </center>
        </div>
      </Modal.Body>
      {/* <Modal.Footer closeButton>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button className="btn btn-sm btn-success" onClick={() => setModalShow(true)}>
        Sign in
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

class Form extends Component {
  userData;
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }

  
onChangeEmail(e) {
  this.setState({ email: e.target.value })
}

onChangePassword(e) {
  this.setState({ password: e.target.vlaue })
}

onSubmit(e) {
  e.preventDefault()

  this.setState({
    email:'',
    password:''

  })
}

componentDidMount() {
  this.userData = JSON.parse(localStorage.getItem('user'));

  if(localStorage.getItem('user')) {
    this.setState({
      email: this.userData.email,
      password: this.userData.password
    })
  } else {
    this.setState({
      email:'',
      password: ''
    })
  }
}

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('user',JSON.stringify(nextState));
}

render () {
  return (
    <div>
      <form onSubmit={this.onSubmit}>
            <label>Your email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="email" placeholder="&#128712;" style={{border:"none",borderBottom:"1px solid grey"}} 
            value={this.state.email} onChange={this.onChangeEmail}></input><br></br><br></br>
            <label>Your password</label>
            <input type="text" placeholder="&#128712;" style={{border:"none",borderBottom:"1px solid grey"}}
            value={this.state.password} onChange={this.onChangePassword}></input><br></br><br></br><br></br>
            <button className="btn btn-dark">Continue</button><br></br><br></br><br></br>
      </form>
    </div>
  )
}

}


export default App;