import React from 'react';
import Portal from './Portal';
import { Line, Close, FillCheckCycle } from "./styles/icons/SvgSprite";

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
              <div className="modalHeader_fill">
                <button className="modalHeader__btn" name="times" onClick={onCancel}><Close /></button>
                <span className="modalHeader__icon"><Line width={50} height={3} /></span>
                <img src="./images/man.jpg" class="modalHeader__img_top" alt="img_top" />

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
                    <span className="code__icon"><FillCheckCycle width={17} height={17} color={'#1bb906'} /></span>
                  </div>
                  <p className="codeText">
                    Great, your telephone number <br /> was verified!
                  </p>
                </section>

                <div className="changeNumber">
                  <p className="changeNumber__text">Not the correct number?</p>
                  <a href="./" className="changeNumber__link">Change number now</a>
                </div> 
               
              </div>
              <div className="modalFooter">
                  <div className="dots">
                    <span className="dots__item_active"></span>
                    <span className="dots__item"></span>
                    <span className="dots__item"></span>
                  </div>
                </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};