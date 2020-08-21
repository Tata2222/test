import React from 'react';
import Portal from './Portal';
import Button from './components/Button';
import { FillCheckCycle, RightArrow, Close, Line } from "./styles/icons/SvgSprite";

import './Modal.scss';

export const ModalCheck = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className={isOpen ? "modalWindow_short open" : "modalWindow_short"}>
         
              <div className="modalHeader_full">

                <button className="modalHeader__btn" name="times" onClick={onCancel}><Close /></button>   
                <div className="imgContainer">
                  <span className="modalHeader__icon"><Line width={50} height={3} /></span>
                  <div className="track__pointBlock">
                    <div className="points">
                      <span className="points__checkedLabel">
                        <span className="points__checkedLabelIcon">
                          <FillCheckCycle width={20} hight={20} />
                        </span>
                        +500
                      </span>
                    </div>
                  </div>
                  <img className="modalHeader__img" src='./images/woman.jpg' alt='header_img' />
                </div>
              </div>

              <div className="modalBody">

              <section className="section__text">
                  <div className="text__wrapper_left">
                    <p className="text_primary_lg">Wait, Maria! <br /> Are you really sure?</p>
                    <p className="text_secondary_lg"> 
                      You are more successful, if actively <br /> tracking your application.
                    </p>
                  </div>
                </section>

                <section  className="advantage">
                  <div className="advantage__list">
                    <div className="advantage__itemWrapper">
                      <span className="advantage__itemIcon"><FillCheckCycle width={15} height={15} /></span>
                      <p className="advantage__item_middle">
                        You getting regularly updates about the status of your application
                      </p>
                    </div>
                    <div className="advantage__itemWrapper">
                      <span className="advantage__itemIcon"><FillCheckCycle width={15} height={15} /></span>
                      <p className="advantage__item_middle">
                        No spam messages or advertisements and all 100% free for you
                      </p>
                    </div>

                  </div>
                </section>
                <Button type="submit" className="btnPrimary">Activate<span className="btn__icon"><RightArrow /></span></Button>
              </div>

            </div>
          </div>
        </Portal>
      }
    </>
  );
};