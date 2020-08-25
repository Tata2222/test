import React from 'react';

import { Line, RightArrow, Eye } from "../styles/icons/SvgSprite";
import Button from '../components/Button';


const Login = () => {

  return (
    <>
        <div className="section__company">
        <div className="company__proposition_default">
          <img className="company__logo" src="./images/jobufo.svg" alt="logo"/>
        </div>
        <div className="company__imgWrapper">
          <img className="company__img" src="./images/blackwoman.jpg" alt="company_image" />
        
        </div>
      </div>

      <div className="info__container">
        <section className="section__loginText">
          <div className="text__wrapper">
            <p className="text_primary">
              Log in to your digital <br/>
              application profile
            </p>
            <p className="text_secondary">
              to join new working adventures.
            </p>
          </div>
        </section>

        <div className="section__login">
          <div className="buttonPanel__login">
            <Button className="btnLoginGoogle">Login with<span className="btn__iconLogo"><img src="./images/google.svg" alt="btn_icon"/></span></Button>
            <Button className="btnLoginFacebook">Login with<span className="btn__iconLogo"><img src="./images/facebook.svg" alt="btn_icon"/></span></Button>
          </div>
          <div className="login__separation">
            <span className="cv__separator">
              <Line width={50} />
              </span>or with<span className="cv__separator">
              <Line width={50} />
            </span>
          </div>
        </div>
        <section  className="section__form">
          <form className="form">
            <div className="form__inputWrapper">
              <input className="form__input_error" type="text" name="email" placeholder="Your e-mail" required />
              <span className="form__inputIcon"></span>
            </div>
          {/*  <p className="form__input_errorMessage">
              Ups, there is no account with this e-mail. <br/>
              Please check your e-mail.
          </p>*/}
            <div className="form__inputWrapper">
              <input className="form__input" type="password" name="password" placeholder="Your password" required/>
              <span className="form__inputIcon"><Eye /></span>
            </div>
            <p className="login__password"><a className= "login__link" href="./">Forgot Password?</a></p>

            <p className="form__input_errorMessage">
              Please check your information.
            </p>

            <button className="btnDefault" type="button">Login<span className="btn__icon"><RightArrow /></span></button>
          </form> 
        </section>

        <p className="login__register">
          Got no application profile?
          <a className="login__link" href="./">Register now!</a>
        </p>   
      </div>
    </>
  );
}

export default Login;