import React, { useState } from 'react';

import { FillCheckCycle, Check, Line, RightArrow, ChevronDown } from "../styles/icons/SvgSprite";
import Button from '../components/Button';



const Login = () => {
  
  const [isTrackOpen, setTrackOpen]= useState(false);

 
 
  return (
    <div className="container" id="container" style={{maxWidth:'400px', margin: 'auto', border: '1px solid black'}}>
      <header className="header">
      
      </header>

     <main className="main">

   
      <div className="section__company">
        <div className="company__proposition_default">
          <img className="company__logo" src="./images/jobufo.svg" alt="logo"/>
        </div>
        <div className="company__imgWrapper">
          <img className="company__img" src="./images/blackwoman.jpg" alt="company_image" />
        
        </div>
      </div>

      <div className="info__container">
        <section className="section text">
          <div className="text__wrapper">
            <p className="text_primary">Do you forgot <br /> your password?</p>
            <p className="text_secondary">No problem! We will help you.<br />
              Insert your mail address to reset <br />
              your password..
            </p>
          </div>
        </section>

        <div className="buttonPanel">
          <Button className="btnLoginGoogle">Login with<span className="btn__iconLogo"><img src="./images/google.svg" alt="btn_icon"/></span></Button>
          <Button className="btnLoginFacebook">Login with<span className="btn__iconLogo"><img src="./images/facebook.svg" alt="btn_icon"/></span></Button>
        </div>
        <div className="cv__separation"><span className="cv__separator"><Line width={50} /></span>or<span className="cv__separator"><Line width={50} /></span></div>
         
        <div className="cv__gap"></div>

        <section  className="section__form">
          <form className="form">
            <div className="form__inputWrapper">
              <input className="form__input" type="text" name="email" placeholder="Your e-mail" required />
              <span className="form__inputIcon" />
            </div>
            <div className="form__inputWrapper">
              <input className="form__input" type="password" name="password" placeholder="Your password" required/>
              <span className="form__inputIcon" />
            </div>
            
            <div className={isTrackOpen?"track":"track_disabled"}>
              <img className="track__img" src="./images/man_with_earphones.jpg" alt="img" />
              <div className="track__pointBlock">
                <div className="points">
                  <span className="points__checkedLabel">
                    <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                    +500
                  </span>
                  <span className="points__text">Track your application</span>
                </div>
                <button className="track__arrow" onClick={()=>setTrackOpen(!isTrackOpen)}><ChevronDown /></button>
              </div>
              <div className="track__info">
                <div className="track__infoText">
                  <p className="track__infoPrimary">You application is more successful</p>
                  <p className="track__infoSecondary">if you keep the overview.</p>
                </div>
                <div className="track__infoFree">
                  <span className="track__separator"><Line /></span>
                  <span className="track__infoFreeIcon"><FillCheckCycle width={15} hight={15} /></span>
                  100% free
                  <span className="track__separator"><Line /></span>
                </div>
                <div className="advantage__list">
                  <p className="advantage__title">Advantages of your digital application</p>
                  <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Track your application</p>
                  <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Fast feedback (e.g over WhatsApp)</p>
                  <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Application check</p>
                </div>
                <span className="track__status">Got no application profile?<a href="./">Register now!</a></span>
              </div>
            </div>
         
            
            <button className="btnDefault" type="button">Reset<span className="btn__icon"><RightArrow /></span></button>
          
          </form> 
        </section>
      </div>
 

     </main>
    
     <footer className="footer">
      <div className="footer__text">Do you need help?</div>
      <div className="footer__profit">
        <span className="footer__profitItem"><span className="footer__profitItemIcon"><Check /></span> 100%</span>
        <span className="footer__profitItem"><span className="footer__profitItemIcon"><Check /></span> no Ads</span>
        <span className="footer__profitItem"><span className="footer__profitItemIcon"><Check /></span> super secure</span>
      </div>
      <div className="footer__imprintBlock">
        <span className="footer__imprint">Imprint</span>
        {/* <select></select> */}
      </div>
    </footer>
    
    </div>
  );
}

export default Login;