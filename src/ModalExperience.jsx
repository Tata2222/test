import React from 'react';
import Portal from './Portal';
import { Line, RightArrow, Close } from "./styles/icons/SvgSprite";

import './Modal.scss';

export const ModalExperience = ({
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
               
                <section className="section__text">
                  <div className="text__wrapper_left">
                    <p className="text_primary_lg">Add Working <br /> Experience</p>
                  </div>
                </section>
               
              </div>
              <div className="modalBody">

                <form className="form">
                  <div className="form__inputWrapper_sm">
                    <input className="form__input" type="text" name="secondary_school"  placeholder="Secondary school" required />    
                    <span className="form__inputIcon" />
                  </div>

                  <div className="form__inputWrapper_sm">
                    <input className="form__input"  type="text" name="school"  placeholder="School" required />    
                    <span className="form__inputIcon" />
                  </div>

                  <div className="form__inputWrapper_sm">
                    <input className="form__input" type="text" name="place"  placeholder="Place" required />    
                    <span className="form__inputIcon" />
                  </div>

                  <div className="form__data">
                    <p className="form__note">From</p>
                    <div className="form__inputWrapper_sm">
                      <input className="form__input_date" placeholder="Month" value="" />
                      <input className="form__input_date" placeholder="Year" value="" />
                    </div>
                    <p className="form__note">To</p>
                    <div className="form__inputWrapper_sm">
                      <input className="form__input_date" placeholder="Month" value="" />
                      <input className="form__input_date" placeholder="Year" value="" />
                    </div>
                  </div>
                  <p className="form__note">Period</p>
                  <div className="form__inputWrapper_sm">
                    <input className="form__input" type="text" name="place"  placeholder="14 days" required />    
                    <span className="form__inputIcon" />
                  </div>
                  <div className="form__acceptBlock">
                    <div className="form__accept">
                      <input className="form__acceptChecker" type="checkbox" id="accept" name="accept" />
                      <label for="accept"><span></span></label>
                      <p className="form__acceptText">I am doing it right now.</p>
                    </div>
                    <button className="btnPrimary" type="button">Add<span className="btn__icon"><RightArrow /></span></button>
                  </div>
                </form>
         
              </div>  
            </div>
          </div>
        </Portal>
      }
    </>
  );
};