import React from 'react';
import { Slider } from './components/Slider';
import { Close } from "./styles/icons/SvgSprite";

import Portal from './Portal';

import './Modal.scss';

export const ModalPhoneInterview = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {
  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
           <div className={isOpen ? "modalWindow open" : "modalWindow"}>
              <div className="modalHeader">
                <button className="modalHeader__btn" name="times" onClick={onCancel}><Close /></button>   

                <div className="section__company_empty">
                  <button className="points__label">200P&deg;</button>
                </div>

                <section className="section__text">
                  <div className="text__wrapper_left">
                    <p className="text_primary_lg">Send your application <br/> anonymously</p>
                    <p className="text_secondary">
                      For this please finish a short test, which <br/> contests your skills.
                    </p>
                  </div>
                </section>
              </div>

              <div className="modalBody">

                <section className="slider">
                  <div className="section__title">How should we contact you?</div>
                  <Slider />
                </section>

                <p className="cv__finishLater">Finish later</p>    
              </div>
              
            </div>
          </div>
      </Portal>
      }
    </>
  );
}