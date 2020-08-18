import React from 'react';
import Portal from './Portal';

import './Modal.scss';

export const ModalVerification = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className={isOpen ? "modalWindow_short open" : "modalWindow_short"}>
              <div className="modalHeader">
               {/* <img className="modalHeader__img" src="./images/man.jpg" alt="header_img" />*/}
                <button name="times" onClick={onCancel}>x</button>

                <section className="section__text">
                  <div className="text__wrapper_left">
                    <p className="text_primary_lg">More success for <br /> your application!</p>
                    <p className="text_secondary_lg"> 
                      Please enter the four digits code,<br /> we sended you via SMS.
                    </p>
                  </div>
                </section>
               
              </div>
              <div className="modalBody">

                <section  className="phone">
                  <p className="phoneText">Your Telephone number:</p>
                  <p className="phoneNumber">+49 172 55229103</p>
                </section>

                <section className="code">
                  <div className="codeList">
                    <div className="codeItem"><span>2</span></div>
                    <div className="codeItem active"><span></span></div>
                    <div className="codeItem empty"><span></span></div>
                    <div className="codeItem empty"><span></span></div>
                  </div>
                  <p className="codeText">
                    Great, your telephone number <br /> was verified!
                  </p>
                </section>

                <div className="changeNumber">
                  <p className="changeNumber__text">Not the correct number?</p>
                  <a href="./" className="changeNumber__link">Change number now</a>
                </div> 
           
                <div className="dots">
                  <span className="dots__item_active"></span>
                  <span className="dots__item"></span>
                  <span className="dots__item"></span>
                </div>
              </div>
              <div className="modalFooter">
                <button onClick={onCancel} invert>Cancel</button>
                <button onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};