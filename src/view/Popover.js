import React, { Component } from 'react';
import {Overlay, Button, ButtonToolbar, Popover} from 'react-bootstrap';

function Example() {
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null);
  
    const handleClick = event => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <ButtonToolbar ref={ref}>
        <button 
        onClick={handleClick}
        style={{borderRadius:"100%",width:"35px",height:"35px",border:"none",background:"green",color:"white"}}><b>R</b></button>
  
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover">
            <Popover.Title>
            <div className="profile"><p>R</p></div>
              <p>Radifan mardhi prana</p>
              <p>Become a member</p>
              </Popover.Title>
            <Popover.Content>
              
              <p><a href="/Newstory">New Story</a></p>
              <p><a href="/Stories">Stories</a></p>
              <p>Stats</p>
              <hr></hr>
              <p><a href="/Bookmark">Bookmark</a></p>
              <p><a href="/Profile">Profile</a></p>
              <p>Settings</p>
              <p>Help</p>
              <p>Sign out</p>
            </Popover.Content>
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
  
  export default Example;