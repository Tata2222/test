import React from 'react';
import { Line, RightArrow, UpArrow, Close } from "./styles/icons/SvgSprite";
import Button from './components/Button';
import Portal from './Portal';

import './Modal.scss';

export const ModalCV = ({
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
                    <p className="text_primary_lg">Introduce yourself in a short cover letter</p>
                    <p className="text_secondary">
                      How do you become aware of us? <br/>
                      Why are you suitable for the vacancy?
                    </p>
                  </div>
                </section>
              </div>

              <div className="modalBody">
                <section  className="chat">
                  <p>Dear Sir or Madam, </p>
                  <p>...</p>
                </section>

                <div className="cv__separation"><span className="cv__separator"><Line width={50} /></span>or<span className="cv__separator"><Line width={50} /></span></div>
                <div className="cv__gap"></div>

                <section  className="section__file">
                  <input name="file" type="file" id="file" class="file" multiple />
                  <label htmlFor="file" class="fileBtn">
                    <span class="fileIconWrapper">
                      <img class="fileIcon" src="./images/file.svg" alt="file" width="25" />
                    </span>
                    <span class="fileText">Choose a file</span>
                  </label>
                </section>

                <section  className="section__cv">
                  <div className="cv__picture">
                    <button className="btnAttachment"><UpArrow /></button>
                    <p className="cv__pictureText">Add CV & Attachments</p>
                    <p className="cv__pictureFormat">as picture, .pdf, .docx or .odt</p>
                  </div>

                  <div className="cv__gap"></div>
                  <Button type="submit" className="btnPrimary">
                    Save
                    <span className="btn__icon"><RightArrow /></span>
                  </Button>                   
          
                  <p className="cv__finishLater">Finish later</p>    
                </section>
              </div>
            </div>
          </div>
      </Portal>
      }
    </>
  );
}
