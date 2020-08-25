import React from 'react';
import { RightArrow } from "../styles/icons/SvgSprite";


const Forgot = () => {

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
            <p className="text_primary">Do you forgot <br /> your password?</p>
            <p className="text_secondary">No problem! We will help you.<br />
              Insert your mail address to reset <br />
              your password..
            </p>
          </div>
        </section>

        <section className="section__email">
          <div className="email__wrapper">
            <p className="email__text">The link goes to:</p>
            <p className="email__link">hello@gmail.com</p>
          </div>

          <div className="email__gap">
          </div>

          <div className="changeEmail">
            <p className="changeEmail__text">Not the correct e-mail?</p>
            <a href="./" className="changeEmail__link">Change now</a>
          </div> 
        </section>
     
        <section  className="section__email">
          <form className="form">
            <div className="form__inputWrapper">
              <input className="form__input" type="text" name="email" placeholder="Your e-mail" required />
              <span className="form__inputIcon"></span>
            </div>
            <div className="email__gap">
              <p className="form__input_errorMessage">
                Ups, there is no account with this e-mail. <br/>
                Please check your e-mail.
              </p>
            </div>
            <button 
              className="btnDefault" 
              type="button"
              >
              Reset
              <span className="btn__icon"><RightArrow /></span>
            </button>
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

export default Forgot;