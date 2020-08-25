import React from 'react';
import { FillCheckCycle, RightArrow, Plus, Triangle, Close } from "../styles/icons/SvgSprite";
import Button from '../components/Button';

import '../Modal.scss';

const VideoClip = ({ onCancel }) => {
  return (
    <>
     <div className="modalHeader">
        <button className="btnCloseModal" name="times" onClick={onCancel}><Close /></button>

        <div className="section__company_empty">
          <button className="points__label">200P&deg;</button>
        </div>

        <section className="section__text">
          <div className="text__wrapper_left">
            <p className="text_primary_lg">We are looking forward to <br /> your easy videoclip</p>
            <p className="text_secondary">
              Never done? The examples will help you by <br /> 
              creating & you got countless attempts
            </p>
          </div>
        </section>
      </div>

      <div className="modalBody">
      
        <section className="videorecord">
          <div className="videorecord_first">

            <video className="videorecord__video" src="./" 
              controls="controls" 
              poster="./images/japanese.jpg" 
              height="100%" 
              width="100%">  
            </video>
          
            <div className="points">
              <span className="points__checkedLabel">
                <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} color={'#e6e6e6'}/></span>
                +200
              </span>
            </div>

            <div className="videorecord__panel">
              <button className="btnPlayVideo"><Triangle /></button>
              <span className="videorecord__time">0:32</span>
            </div>
          </div>

          <div className="videorecord_second">
            <video className="videorecord__video" src="./" 
              poster="./images/darkhead_man.jpg" 
              height="100%" 
              width="100%">  
            </video>
            <p className="videorecord__name">Tom</p>
            <div className="videorecord__panel">
              <button className="btnPlayVideo"><Triangle /></button>
              <span className="videorecord__time">0:32</span>
            </div>
          </div>

          <div className="videorecord_third">
            <video className="videorecord__video" src="./" 
              poster="./images/woman_in_red.jpg" 
              height="100%" 
              width="100%">  
            </video>
            <p className="videorecord__name">Tom</p>
            <div className="videorecord__panel">
              <button className="btnPlayVideo"><Triangle /></button>
              <span className="videorecord__time">0:32</span>
            </div>
          </div>
        </section>

        <section className="section__points">
          <div className="points">
            <span className="points__checkedLabel">
              <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} color={'#e6e6e6'}/></span>
              +200
            </span>
            <span className="points__text_bold">Now it’s your turn!</span>
          </div>
        </section>

        <section className="section__videoclip">
          <div className="videoclip">
            <div className="videoclip__wrapper">
              <div className="videoclip__video"> </div>
              <div className="videoclip__text">
                <p className="videoclip__title">Videoclip 1</p>
                <p className="videoclip__quality_super">
                  <span className="videoclip__emoticon"><img src="./images/smile1.svg" alt='emoticon'/></span>
                  Qualität is super!
                </p> 
              </div>
            </div>
            <button className="btnClose"><Close /></button>
          </div>

          <div className="videoclip">
            <div className="videoclip__wrapper">
              <div className="videoclip__video"> </div>
              <div className="videoclip__text">
                <p className="videoclip__title">Videoclip 1</p>
                <p className="videoclip__quality_notOptimal">
                  <span className="videoclip__emoticon"><img src="./images/smile2.svg" alt='emoticon'/></span>
                  Qualität is super!
                </p> 
              </div>
            </div>
            <button className="btnClose"><Close /></button>
          </div>

          <div className="videoclip">
            <div className="videoclip__wrapper">
              <div className="videoclip__video"></div>
              <div className="videoclip__text">
                <p className="videoclip__title">Videoclip 1</p>
                <p className="videoclip__quality_bad">
                  <span className="videoclip__emoticon"><img src="./images/smile3.svg" alt='emoticon'/></span>
                  Qualität is super!
                </p> 
              </div>
            </div>
            <button className="btnClose"><Close /></button>
          </div>
        </section>

        <section  className="section__cv">
          <div className="cv__picture">
            <button className="btnAttachment"><Plus /></button>
            <p className="cv__pictureText">Record a new Video</p>
            <p className="cv__pictureFormat">or upload an existing Video</p>
          </div>

          <div className="cv__feedback">
            <img src='./images/woman_picture.svg' alt='feedback_img' className="cv__feedbackImg"/>
            <p className="cv__feedbackTitle">Video-Feedback</p>
            <p className="cv__feedbackText">You will get free feedback for your <br /> video by experts</p>
          </div>

          <Button type="submit" className="btnPrimary">
            Save
            <span className="btn__icon"><RightArrow /></span>
          </Button>  

          <div className="cv__gap"></div>
          <button className="btnFinish">Finish later</button>
        </section>
      </div>
    </>
  );
}

export default VideoClip;