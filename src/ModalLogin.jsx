import React from 'react';
import Portal from './Portal';
import Button from './components/Button';
import { FillCheckCycle, RightArrow } from "./styles/icons/SvgSprite";

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
              <div className="modalHeader">
               {/* <img className="modalHeader__img" src="./images/man.jpg" alt="header_img" />*/}
                <button name="times" onClick={onCancel}>x</button>

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
                  <Button className="btnLoginGoogle">Login with<span></span></Button>
                  <Button className="btnLoginFacebook">Login with<span></span></Button>
                </div>

                <section className="password">
                  <input className="password__input" type="password" name="password" placeholder="*******" required></input>
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