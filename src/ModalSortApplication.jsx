import React from 'react';
import { RightArrow } from "./styles/icons/SvgSprite";

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
                <button name="times" onClick={onCancel}>x</button>
            

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
                <p className="cv__finishLater">Finish later</p>    
              </div>

            </div>
          </div>
      </Portal>
      }
    </>
  );
}