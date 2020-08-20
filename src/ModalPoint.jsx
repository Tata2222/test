import React from 'react';
import Portal from './Portal';
import { FillCheckCycle, Check, RightArrow } from "./styles/icons/SvgSprite";

import './Modal.scss';

export const ModalPoint = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className={isOpen ? "modalWindow open" : "modalWindow"}>
              <div className="modalHeader">
                <button name="times" onClick={onCancel}>x</button>

                <section className="section__text">
                  <div className="text__wrapper_left">
                    <p className="text_primary_lg">Collect points & <br /> reward yourself!</p>
                    <p className="text_secondary"> 
                      The points define the informative of your <br />
                      application and you can use them later to 
                      reward yourself
                    </p>
                  </div>
                </section>
               
                <div className="modalCheckBox">
                 <input type="checkbox" id="checker"/>
                 <label for="checker"></label>
                </div>
                <p className="modalNote">Average other applications: 500Pº</p>
              </div>
              <div className="modalBody">

                <div className="profile">
                  <img className="profile__img" src="./images/man.jpg" alt="img1" />
                  <div className="profile__pointBlock">
                    <span className="points__checkedLabel_disabled">
                      <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                      +800
                    </span>
                  </div> 
                
                  <p className="profile__title">Your digital <br/> application profile</p>
            
                  <div className="advantage__list">
                    <p className="advantage__title">Advantages of your digital application</p>
                    <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Track your application</p>
                    <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Fast feedback (e.g over WhatsApp)</p>
                    <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Application check</p>
                  </div>
                  <button className="btnPrimary" type="button">Register<span className="btn__icon"><RightArrow /></span></button>
                  <p className="cv__finishLater">Login</p>
                </div>
                <div className="point__list">
                  <p className="point__title">Your possible points:</p>
                  <p className="point__item">
                    <div className="points">
                      <span className="points__checkedLabel">
                        <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                        +200
                      </span>
                      <span className="points__text">Personal information</span>
                    </div>
                  </p>
                 
                  <p className="point__item">
                    <div className="points">
                      <span className="points__checkedLabel">
                        <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                        +300
                      </span>
                      <span className="points__text"> CV/Attachments</span>
                    </div>
                  </p>
                  <p className="point__item">
                    <div className="points">
                      <span className="points__checkedLabel">
                        <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                        +500
                      </span>
                      <span className="points__text">Videoclip</span>
                    </div>
                  </p>
                  <p className="point__item">
                    <div className="points">
                      <span className="points__checkedLabel">
                        <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                        +300
                      </span>
                      <span className="points__text">Voice message</span>
                    </div>
                  </p>
                  <p className="point__item">
                    <div className="points">
                      <span className="points__checkedLabel">
                        <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                        +300
                      </span>
                      <span className="points__text">Short application</span>
                    </div>
                  </p>
                  <p className="point__item">
                    <div className="points">
                      <span className="points__checkedLabel">
                        <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                        +300
                      </span>
                      <span className="points__text">Telephone interview</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};


/* <div className="modalTitle">
                  {`Collect points & reward yourself!`}
                </div>
                <div className="modalText">
                  The points define the informative of your 
                  application and you can use them later to 
                  reward yourself
                </div>*/