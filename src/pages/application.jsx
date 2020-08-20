import React from 'react';
import { Slider } from '../components/Slider';

import { FillCheckCycle, Check, RightArrow } from "../styles/icons/SvgSprite";

const Application = () => {
  return (
    <>
     <div className="section__company_empty">
        <button className="points__label">200P&deg;</button>
      </div>

      <div className="info__container">
        <section className="section__text">
          <div className="text__wrapper_left">
            <p className="text_primary">Nice done, Maria!</p>
            <p className="text_secondary">Make your application to an unique piece & <br /> choose, what fits best to you:</p>
          </div>
        </section>
        
        <section className="slider">
          <div className="section__title">Recommended Application forms</div>
          <Slider />
        </section>

        <section  className="section__application">
          <div className="section__title">Make it easier for you & us!</div>
          <div className="profile">
            <img className="profile__img" src="./images/man.jpg" alt="img1" />
            <div className="profile__pointBlock">
              <span className="points__checkedLabel_disabled">
                <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                +500
              </span>
            </div>
                  
            <p className="profile__title">Your digital <br/> application profile</p>
            
            <div className="advantage__list">
              <p className="advantage__title">Advantages of your digital application</p>
              <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Track your application</p>
              <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Fast feedback (e.g over WhatsApp)</p>
              <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Application check</p>
            </div>
            <button className="btnPrimary" type="button">Register<span className="btn__icon"><RightArrow /></span></button>
            <p className="cv__finishLater">Login</p>
          </div>
            
          <button className="btnPrimary" type="button">Send<span className="btn__icon"><RightArrow /></span></button>
          <p className="cv__finishLater">Finish later</p>
        </section>
      </div>
    </>
  );
}


export default Application;