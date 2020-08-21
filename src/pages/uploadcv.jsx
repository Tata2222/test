import React, {useState} from 'react';
import { Line, RightArrow, UpArrow, FillCheckCycle, ChevronDown, Check, Close } from "../styles/icons/SvgSprite";

const CvUpload = () => {
  const [isTrackOpen, setTrackOpen]= useState(false);

  return (
    <>
     <div className="section__company_empty">
        <button className="points__label">200P&deg;</button>
      </div>

      <div className="info__container">
        <section className="section__text">
          <div className="text__wrapper_left">
            <p className="text_primary">Hi Maria!</p>
            <p className="text_secondary">Please add your CV and <br />  attachments.</p>
          </div>
        </section>

        <section  className="section__file">
          <div className="fileWrapper">
            <input name="file" type="file" id="file" class="file" multiple />
            <label htmlFor="file" class="fileBtn">
              <span class="fileIconWrapper">
                <img class="fileIcon" src="./images/file.svg" alt="file" width="25" />
              </span>
              <span class="fileText">Choose a file</span>
            </label>
          </div>
          <button className="btnCloseFile"><Close /></button>
        </section>

        <section  className="cv__donut">
          <div className="cv__picture">
              <button className="btnAttachment"><UpArrow /></button>
              <p className="cv__pictureText">Add CV & Attachments</p>
              <p className="cv__pictureFormat">as picture, .pdf, .docx or .odt</p>
          </div>
        </section>

        <section  className="section__cv">
          <div className="cv__picture">
            <button className="btnAttachment"><UpArrow /></button>
            <p className="cv__pictureText">Add CV & Attachments</p>
            <p className="cv__pictureFormat">as picture, .pdf, .docx or .odt</p>
          </div>

          <div className={isTrackOpen?"track":"track_disabled"}>
              <img className="track__img" src="./images/women.jpg" alt="img" />
              <div className="track__pointBlock">
                <div className="points">
                  <span className="points__checkedLabel">
                    <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} /></span>
                    +500
                  </span>
                  <span className="points__text">Track your application</span>
                </div>
                <button className="track__arrow" onClick={()=>setTrackOpen(!isTrackOpen)}><ChevronDown /></button>
              </div>
              <div className="track__info">
                <div className="track__infoText">
                  <p className="track__infoPrimary">You application is more successful</p>
                  <p className="track__infoSecondary">if you keep the overview.</p>
                </div>
                <div className="track__infoFree">
                  <span className="track__separator"><Line /></span>
                  <span className="track__infoFreeIcon"><FillCheckCycle width={15} hight={15} /></span>
                  100% free
                  <span className="track__separator"><Line /></span>
                </div>
                <div className="advantage__list">
                  <p className="advantage__title">Advantages of your digital application</p>
                  <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Track your application</p>
                  <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Fast feedback (e.g over WhatsApp)</p>
                  <p className="advantage__item"><span className="advantage__itemIcon"><Check /></span>Application check</p>
                </div>
                <span className="track__status">Deactivate</span>
              </div>
            </div>

          <button className="btnPrimary" type="button">Continue<span className="btn__icon"><RightArrow /></span></button>
          <p className="cv__finishLater">Finish later</p>
        
        </section>
      </div>
    </>
  );
}


export default CvUpload;