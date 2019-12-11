import React from 'react';
import left from './left.png';
import right from './right.png';
import './App.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Login from './view/Login';
import ReactDOM from 'react-dom';

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
        <a href="!#" onClick={props.onHide} style={{marginLeft:"94%",position:"absolute",fontSize:"25px",color:"black"}}>&times;</a>
        <img src={left} alt="left" width="214" height="550" align="left" style={{marginLeft:"-16px", marginTop:"-16px"}}></img>
        <img src={right} alt="right" width="214" height="550" align="right" style={{marginRight:"-16px", marginTop:"-16px"}}></img>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          <h4>hello</h4>
        </Modal.Title> */}
        <h3 align="center"><b>Join medium.</b></h3>
        <p style={{fontSize:"15px",textAlign:"center",color:"grey"}}>create an account to receive great story in your inbox,
          personalize your homepage, and follow authors and topics that you love
        </p>
        <center>
          <form>
            <label>Your username</label>
            <input type="text" placeholder="&#128712;" style={{border:"none",borderBottom:"2px solid grey"}}></input><br></br><br></br>
            <label>Your password</label>
            <input type="password" placeholder="&#128712;" style={{border:"none",borderBottom:"2px solid grey"}}></input><br></br><br></br>
            <label>Your email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="email" placeholder="&#128712;" style={{border:"none",borderBottom:"2px solid grey"}}></input><br></br><br></br>
            <button className="btn btn-dark">Registration</button><br></br><br></br><br></br>

            <p><b>Already have account?
     <div style={{marginLeft:"62%",marginTop:"-3.3%"}}>
    <Router>
      {/* <Link to="/"> Sign in</Link> */}
      <Route component={Login} />
    </Router>
      </div> 
              </b></p>
          </form>
        </center>
        <p style={{fontSize:"15px",textAlign:"center",color:"grey"}}>
          To make Medium work, we log user data and share it with service providers. 
        Click “Sign Up” above to accept Medium’s 
        <a href="!#" style={{color:"grey",textDecoration:"underline"}}>Terms of Service</a> & <a href="!#" style={{color:"grey",textDecoration:"underline"}}>Privacy Policy.</a></p>
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
        Get started
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}



export default App;