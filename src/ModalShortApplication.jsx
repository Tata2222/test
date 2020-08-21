import React from 'react';
import  Button  from "./components/Button";
import { RightArrow, Close } from "./styles/icons/SvgSprite";

import Portal from './Portal';

import './Modal.scss';

export const ModalShortApplication = ({
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

                <section className="section__slide">
                  <div className="slide__container_fill">

                   
                    <div className="section__logo">
                      <img className='slide__logo' src='./images/whatsApp.svg' alt='slide_img' />
                      <p className="slide__title">Short application</p>
                    </div>

                  
                    <section className="slide__info_sm">
  
                      <ul className="slide__list">
                        <li className="slide__item">Answer 5 easy questions</li>
                        <li  className="slide__item">chat with WhatsApp</li>
                      </ul>
                 
                      
                      </section> 
                      <Button className="btnSlide"><RightArrow /></Button>
                      
                  </div>
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