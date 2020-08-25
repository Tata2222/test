import React from 'react';
import { Line, RightArrow, UpArrow } from "../styles/icons/SvgSprite";

const CV = () => {
  return (
    <>
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

          <div className="cv__separation">
                  <span className="cv__separator">
                    <Line width={50} />
                  </span>
                  or
                  <span className="cv__separator">
                    <Line width={50} />
                  </span>
                </div>

          <div className="cv__generator">
            <button className="btnGenerator">CV-Generator<span className="btn__icon"><RightArrow /></span></button>
          </div>

          <div className="cv__whatsApp">
            <button className="btnWhatsApp"><span>Through <span className="whatsApp__logo"><img src='./images/whatsApp.svg' alt='img_logo' /><br /></span> sending CV</span><span className="btn__icon"><RightArrow /></span></button>
          </div>

          <p className="cv__error">
            Ups! You need to add something, 
            before you can continue.
          </p>
            
          <button className="btnSecondary" type="button">Continue<span className="btn__icon"><RightArrow /></span></button>

          <button className="btnFinish">Finish later</button>
        
        </section>
      </div>
    </>
  );
}


export default CV;