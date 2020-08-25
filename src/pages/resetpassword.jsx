import React from 'react';

import { FillCheckCycle, RightArrow, Close } from "../styles/icons/SvgSprite";


const Reset = ({ onCancel}) => {

  return (
    <>
      <div className="section__company">
        <div className="company__proposition_default">
         <button className="company__btn" name="times" onClick={onCancel}><Close color={'#fff'} /></button>   
          <img className="company__logo" src="./images/jobufo.svg" alt="logo"/>
        </div>
        <div className="company__imgWrapper">
          <img className="company__img" src="./images/blackwoman.jpg" alt="company_image" />
        </div>
      </div>

      <div className="password__container">
        <section className="section__loginText">
          <div className="text__wrapper">
            <p className="text_primary">
              Hey, Maria! Please enter <br/>
              a new password.
            </p>
            <p className="text_secondary">
              After changing, you can login <br/>
              with the new password.
            </p>
          </div>
        </section>

        <section className="password">
          <div className="form__inputWrapper">
            <input className="password__input" type="password" name="password" placeholder="*******" required></input>
            <span className="form__inputIcon" />
          </div>
    
          <p className="password__approval">Nice! Your password is strong & super secure</p>
        </section>

        <section  className="advantage">
          <div className="advantage__list">
            <p className="advantage__title">A strong password at least got:</p>
            <p className="advantage__item_dark"><span className="advantage__itemIcon"><FillCheckCycle width={15} height={15}  color={'#0900ed'} /></span>One capital letter</p>
            <p className="advantage__item_dark"><span className="advantage__itemIcon"><FillCheckCycle width={15} height={15}  color={'#0900ed'} /></span>One number</p>
            <p className="advantage__item_dark"><span className="advantage__itemIcon"><FillCheckCycle width={15} height={15}  color={'#0900ed'} /></span>One special letter</p>
            <p className="advantage__item_dark"><span className="advantage__itemIcon"><FillCheckCycle width={15} height={15}  color={'#0900ed'} /></span>At least 8 character</p>
          </div>
        </section>   

        <button 
          className="btnDefault" 
          type="button"
          >
          Reset
          <span className="btn__icon"><RightArrow /></span>
        </button>
      </div>
    </>
  );
}

export default Reset;