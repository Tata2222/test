import React from 'react';
import Portal from './Portal';
import Button from './components/Button';

import './Modal.scss';

export const ModalContact = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className={isOpen ? "modalWindow_contact open" : "modalWindow_contact"}>
         
              <div className="modalHeader_full">
                
                <button className="modalHeader__btn" name="times" onClick={onCancel}><Close /></button>
                <div className="imgContainer_sm">
                  <span className="modalHeader__icon"><Line width={50} height={3} /></span>
                  <p className="modalHeader__helpText">Do you need help?</p>
                </div>
              </div>

              <div className="modalBody">

                <section className="section__textPrimary">
                  <div className="text__wrapper_left">
                    <p className="text_primary_lg">How should we <br />  contact you?</p>
                  </div>
                </section>

                <section className="section__phoneAppPanel">
                  <div className="phoneAppWrapper">
                   <Button className="btnTelephone"><span></span></Button>
                   <p className="phoneAppName">Telephone</p>
                 </div>
                 <div className="phoneAppWrapper">
                   <Button className="btnWhatsAppRound"><span></span></Button>
                   <p className="phoneAppName">WhatsApp</p>
                 </div>
                 <div className="phoneAppWrapper">
                   <Button className="btnLivechat"><span></span></Button>
                   <p className="phoneAppName">Livechat</p>
                 </div>
                </section>

                <p className="note">All 100% free</p>
              </div>

            </div>
          </div>
        </Portal>
      }
    </>
  );
};