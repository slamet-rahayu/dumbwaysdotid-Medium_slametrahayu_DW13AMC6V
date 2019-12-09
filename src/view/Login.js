import React from 'react';
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
          <form>
            <label>Your email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="email" placeholder="&#128712;" style={{border:"none",borderBottom:"1px solid grey"}}></input><br></br><br></br>
            <label>Your password</label>
            <input type="password" placeholder="&#128712;" style={{border:"none",borderBottom:"1px solid grey"}}></input><br></br><br></br><br></br>
            <button className="btn btn-dark">Continue</button><br></br><br></br><br></br>
            <BrowserRouter>
            <Apps />
            </BrowserRouter>
          </form>
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
      <Button className="btn btn-sm btn-success" onClick={() => setModalShow(true)} style={{marginLeft:"80%"}}>
        Login
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}



export default App;
