import React from 'react';
import Portal from './Portal';
import Button from './components/Button';
import { FillCheckCycle, RightArrow, Close, Line, Eye } from "./styles/icons/SvgSprite";

import './Modal.scss';

export const ModalLogin = ({
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
                    <p className="text_primary_lg">Great! Nearly done! <br /> Keep on!</p>
                    <p className="text_secondary_lg"> 
                      Create a password or connect <br /> your profile with:
                    </p>
                  </div>
                </section>
               
              </div>
              <div className="modalBody">

                <div className="buttonPanel">
                  <Button className="btnLoginGoogle">Login with<span className="btn__iconLogo"><img src="./images/google.svg" alt="btn_icon"/></span></Button>
                  <Button className="btnLoginFacebook">Login with<span className="btn__iconLogo"><img src="./images/facebook.svg" alt="btn_icon"/></span></Button>
                </div>

                <section className="password">
                  <div className="form__inputWrapper">
                    <input className="password__input" type="password" name="password" placeholder="*******" required></input>
                    <span className="form__inputIcon" ><Eye /></span>
                  </div>
                    <p className="password__approval">Nice! Your password is strong & super secure</p>
                
                </section>

                <section  className="advantage">
                  <div className="advantage__list">
                    <p className="advantage__title">A strong password at least got:</p>
                    <p className="advantage__item_dark"><span className="advantage__itemIcon"><FillCheckCycle width={15} height={15} /></span>One capital letter</p>
                    <p className="advantage__item_dark"><span className="advantage__itemIcon"><FillCheckCycle width={15} height={15} /></span>One number</p>
                    <p className="advantage__item_dark"><span className="advantage__itemIcon"><FillCheckCycle width={15} height={15} /></span>One special letter</p>
                    <p className="advantage__item_dark"><span className="advantage__itemIcon"><FillCheckCycle width={15} height={15} /></span>At least 8 character</p>
                  </div>
                </section>
            

              </div>
              <div className="modalFooter">
                <button className="btnPrimary" type="button">Finish<span className="btn__icon"><RightArrow /></span></button>
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