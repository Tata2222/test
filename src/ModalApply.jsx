import React from 'react';
import { RightArrow, FillCheckCycle, Close } from "./styles/icons/SvgSprite";
import Button from './components/Button';

import Portal from './Portal';

import './Modal.scss';

export const ModalApply = ({
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
                  <div className="slide__container">
                    <span className="slide__icon"><FillCheckCycle width={20} height={20} /></span>
                    <img className='slide__img' src='./images/blondman_with_phone.jpg' alt='slide_img' />

                    <section className="slide__info">
      
                      <p className="slide__title">Anonymous <br /> Skill test</p>
                      <ul className="slide__list">
                        <li className="slide__item">Done in some minuts</li>
                        <li  className="slide__item">Finish short games</li>
                      </ul>
                      <Button className="btnSlide"><RightArrow /></Button>
                    </section>

                   
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
              