import React from 'react';
import { FillCheckCycle, Check, Line, RightArrow } from "../styles/icons/SvgSprite";


export const Summary = () => {
  return (
    <>
      <header className="header">
       <div className="header header__container">

         <div className="header progressBar">
            <ul className="progressBar__list">
              <li className="progressBar__item_active">Information</li>
              <span className="progressBar__separator"><Line /></span>
              <li className="progressBar__item">CV</li>
              <span className="progressBar__separator"><Line /></span>
              <li className="progressBar__item">Application</li>
            </ul>
          </div>
        </div>
      </header>


     <main className="main">
        <div className="section__quality">
          <div className="modalCheckBox">
            <input type="checkbox" id="checker"/>
            <label for="checker"></label>
          </div>
          <p className="modalNote">Average other applications: 500Pº</p>
        </div>
        
      <div className="section__company">
        <div className="company__imgWrapper">
          <img className="company__img" src="./images/mountain_woman.jpg" alt="company_image" />
        </div>
      </div>

      <div className="info__container">
        <section className="section__text">
          <div className="text__wrapper_left">
            <p className="text_primary_lg">Well done, Maria!</p>
            <p className="text_secondary_lg">You application will be checked & <br /> forwarded to the matching department.</p>
          </div>
        </section>
        <section  className="section__application">
          <div className="section__title_sm">Your application:</div>
          
          <div className="profile">
            <img className="profile__img" src="./images/man.jpg" alt="img1" />
            <div className="profile__pointBlock">
              <span className="points__checkedLabel_disabled">
                <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                +800
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

          <div className="point__list">
            <p className="point__title">Your possible points:</p>
            <p className="point__item">Personal information</p>
            <p className="point__item">CV/Attachments</p>
            <p className="point__item">Videoclip</p>
            <p className="point__item">Voice message</p>
            <p className="point__item">Short application</p>
            <p className="point__item">Telephone interview</p>
          </div>

          <p className="feedback">
            <span className="feedback__emphasized">Wow great!</span> Your application is more successful than the average application. 
            Your chances to get a positive feedback is very high!
          </p>    
            
          <button className="btnPrimary" type="button">Okay<span className="btn__icon"><RightArrow /></span></button>
          <p className="cv__finishLater">Finish later</p>
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
    </>
  )
}