import React from 'react';
import Portal from './Portal';

import './Modal.scss';

export const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <button name="times" onClick={onCancel}>x</button>
                <div className="modalTitle">
                  {`Collect points & reward yourself!`}
                </div>
                <div className="modalText">
                  The points define the informative of your 
                  application and you can use them later to 
                  reward yourself
                </div>
                <div className="modalCheckBox">
                 <input type="checkbox" id="checker"/>
                 <label for="checker"></label>
                </div>
                <p className="modalNote">Average other applications: 500Pº</p>
              </div>
              <div className="modalBody">
                <div className="modalBody__container">
                  <img className="modalBody__img" src="man.jpg" alt="" />
                  <div className="modalBody__info">
                    <div className="modalBody__primary">
                        Your digital application profile
                    </div>
                    <div className="modalBody__List">
                        <p className="modalBody__Title">Free Advantages</p>
                        <p className="modalBody__Item">Track your application</p>
                        <p className="modalBody__Item">Fast feedback (e.g. WhatsApp)</p>
                        <p className="modalBody__Item">Application check</p>
                    </div>
                  </div>
                </div>
                  {/*children*/}
              </div>
              <div className="point__list">
                <p className="point__title">Your possible points:</p>
                <p className="point__item">Personal information</p>
                <p className="point__item">CV/Attachments</p>
                <p className="point__item">Videoclip</p>
                <p className="point__item">Voice message</p>
                <p className="point__item">Short application</p>
                <p className="point__item">Telephone interview</p>
              </div>
              <div className="modalFooter">
                <button onClick={onCancel} invert>Cancel</button>
                <button onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};