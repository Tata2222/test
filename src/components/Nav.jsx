import React from 'react';
import { NavLink } from 'react-router-dom';
 

const NavList = () => (
  <ul className="navList" 
   style={{position: "fixed", top: "50px", left: "40px", display: "flex", flexDirection: "column" }}
  >
    <NavLink to='/'>
      Login
    </NavLink>

    <NavLink to="/information">
      Information 
    </NavLink>

    <NavLink to="/cv" >
      CV 
    </NavLink>

    <NavLink to="/application" >
      Application 
    </NavLink>

    <NavLink to="/summary" >
      Summary 
    </NavLink>

    <NavLink to="/channel" >
      Channel 
    </NavLink>

    <NavLink  to="/uploadcv" >
      Upload CV
    </NavLink>
    
    <NavLink  to="/createcv" >
      Create CV
    </NavLink>

    <NavLink  to="/apply" >
      Apply 
    </NavLink>

    <NavLink  to="/interview" >
      PhoneInterview 
    </NavLink>

    <NavLink  to="/shortapplication" >
      ShortApplication 
    </NavLink>

    <NavLink  to="/videoclip" >
      VideoClip 
    </NavLink>

    <NavLink  to="/voicemessage" >
      VoiceMessage 
    </NavLink>

    <NavLink to="/forgotpassword">
      Forgot Password
    </NavLink>

    <NavLink to="/resetpassword">
      Reset Password
    </NavLink>

    <NavLink to="/coverletter">
      Cover Letter
    </NavLink>
  </ul>
)

export default NavList;