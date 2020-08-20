import React from 'react';
import Portal from './Portal';
import { Line, RightArrow, Close } from "./styles/icons/SvgSprite";

import './Modal.scss';

export const ModalRegistration = ({
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
                      For this, we need detailed  <br /> information about you:
                    </p>
                  </div>
                </section>
               
              </div>
              <div className="modalBody">

                <section  className="section__form_contacts">
                  <form className="form">
              
                    <input className="form__input" type="text" name="adress" placeholder="Street & House number" required/>
                    <div className="form__cityBlock">
                      <input className="form__input_sm" type="text" name="zip" placeholder="ZIP" required/>
                      <select className="form__input"  name="city" required>
                        <option value="">Berlin</option>
                      </select>
                    </div>
                    <select className="form__input"  name="country" required>
                      <option value="">Germany</option>
                    </select>
                    <div className="form__phoneBlock">
                      <select className="form__input_code"  name="code" required>
                        <option value="">+49</option>
                      </select>
                      <input className="form__input_phone" type="tell" name="phone" placeholder="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                  </form>
                </section>

                </div>
              <div className="modalFooter">
                <button className="btnPrimary" type="button">Continue<span className="btn__icon"><RightArrow /></span></button>
          
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