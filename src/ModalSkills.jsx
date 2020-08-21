import React from 'react';
import Portal from './Portal';
import { Line, Close, RightArrow } from "./styles/icons/SvgSprite";

import './Modal.scss';

export const ModalSkills = ({
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
                    <p className="text_primary_lg">Add <br />Skills</p>
                  </div>
                </section>
               
              </div>
              <div className="modalBody">

                <section className="section__skills">
                  <div className="cvOption__btnWrapper">
                    <button className="btnSkill_disabled" type="button">EU-Citizenship</button>
                    <button className="btnSkill" type="button">social</button>
                  </div>
                  <div className="cvOption__btnWrapper">
                    <button className="btnSkill_disabled" type="button">technically gifted</button>
                  </div>
                  <div className="cvOption__btnWrapper">
                    <button className="btnSkill_disabled" type="button">technically interested</button>
                  </div>
                  <div className="cvOption__btnWrapper">
                    <button className="btnSkill_disabled" type="button">neat</button>
                    <button className="btnSkill_disabled" type="button">work in a team</button>
                  </div>
                  <div className="cvOption__btnWrapper">
                    <button className="btnSkill_disabled" type="button">loves working outside</button>
                  </div>
                  <div className="cvOption__btnWrapper">
                    <button className="btnSkill_disabled" type="button">creative</button>
                    <button className="btnSkill_disabled" type="button">logically thinking</button>
                  </div>
                </section>
                <button className="btnPrimary" type="button">Add<span className="btn__icon"><RightArrow /></span></button>
         
              </div>  
            </div>
          </div>
        </Portal>
      }
    </>
  );
};