import React from 'react';

import { Check, Line, RightArrow, UpArrow } from "../styles/icons/SvgSprite";

export const CV = () => {
  return (
    <>
      <header className="header">
       <div className="header header__container">

         <div className="header progressBar">
            <ul className="progressBar__list">
              <li className="progressBar__item">Information</li>
              <span className="progressBar__separator"><Line /></span>
              <li className="progressBar__item_active">CV</li>
              <span className="progressBar__separator"><Line /></span>
              <li className="progressBar__item">Application</li>
            </ul>
          </div>
        </div>
      </header>

     <main className="main">
     <div className="section__company_empty">
        <button className="points__label">200P&deg;</button>
      </div>

      <div className="info__container">
        <section className="section__text">
          <div className="text__wrapper_left">
            <p className="text_primary">Hi Maria!</p>
            <p className="text_secondary">Please add your CV and attachments.</p>
          </div>
        </section>

        <section  className="section__cv">
          <div className="cv__picture">
            <button className="btnAttachment"><UpArrow /></button>
            <p className="cv__pictureText">Add CV & Attachments</p>
            <p className="cv__pictureFormat">as picture, .pdf, .docx or .odt</p>
          </div>

          <div className="cv__separation"><span className="cv__separator"><Line width={50} /></span>or<span className="cv__separator"><Line width={50} /></span></div>

          <div className="cv__generator">
            <button className="btnGenerator">CV-Generator<span className="btn__icon"><RightArrow /></span></button>
          </div>

          <div className="cv__whatsApp">
            <button className="btnWhatsApp"><span>Through <span className="whatsApp__logo">whatsApp</span> sending CV</span><span className="btn__icon"><RightArrow /></span></button>
          </div>

          <p className="cv__error">
            Ups! You need to add something, 
            before you can continue.
          </p>
            
          <button className="btnSecondary" type="button">Continue<span className="btn__icon"><RightArrow /></span></button>

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
  );
}
