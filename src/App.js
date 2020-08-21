import React, { useState } from 'react';
import { ModalSkills } from './ModalSkills';
import { FillCheckCycle, Check, Line, RightArrow, ChevronDown } from "./styles/icons/SvgSprite";
import CvCreate from './pages/createcv';
import Button from './components/Button';
import './App.scss';


function App() {
  const [isModalOpen, setIsModalOpen]= useState(false);
  const [pageName, setPageName] = useState('Information');
  const [isTrackOpen, setTrackOpen]= useState(false);

  console.log(isModalOpen)
 
  return (
    <div className="container" id="container" style={{maxWidth:'400px', margin: 'auto', border: '1px solid black'}}>
      <header className="header">
       <div className="header header__container">

         <div className="header progressBar">
            <ul className="progressBar__list">
              <li className="progressBar__item_active">Information</li>
              <span className="progressBar__separator"><Line /></span>
              <li className="progressBar__item">CV</li>
              <span className="progressBar__separator"><Line /></span>
              <li className="progressBar__item">Application</li>
            </ul>
          </div>
        </div>
      </header>

     <main className="main">

     {pageName==='Information'
      ? <>
      <div className="section__company">
        <div className="company__proposition">
          <img className="company__logo" src="./images/proSiebenSat_logo.svg" alt="logo"/>
          <div className="company__vacancy">Praktikant (m/w/d) Corporate Controlling</div>
        </div>
        <div className="company__imgWrapper">
          <img className="company__img" src="./images/bild.jpg" alt="company_image" />
          <button className="points__label" onClick={() => setIsModalOpen(true)}>200P&deg;</button>
        </div>
      </div>

      <div className="info__container">
        <section className="section text">
          <div className="text__wrapper">
            <p className="text_primary">Please give us you contact information</p>
            <p className="text_secondary">so that we can reach you faster.</p>
          </div>
        </section>
        <section  className="section__form">
          <form className="form">
            <div className="form__checkboxPanel">
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male"> Male</label>
              <input type="radio" id="diverse" name="gender" value="diverse" />
              <label for="diverse">Diverse</label>
            </div>
            <div className="form__inputWrapper">
              <input className="form__input" type="text" name="name" placeholder="Name" required/>
              <span className="form__inputIcon" />
            </div>
            <div className="form__inputWrapper">
              <input className="form__input" type="text" name="lastname" placeholder="Last Name" required/>
              <span className="form__inputIcon" />
            </div>
            <div className="form__inputWrapper">
              <select className="form__input"  name="city" required>
                <option value="">City</option>
              </select>
              <span className="form__inputIcon" />
            </div>
            <div className="form__inputWrapper">
              <select className="form__input"  name="birthday" required>
                <option value="">Birthday</option>
              </select>
              <span className="form__inputIcon" />
            </div>
            <div className="form__inputWrapper">
              <input className="form__input" type="tell" name="phone" placeholder="Phone" pattern="[0-9]{11}" required />
              <span className="form__inputIcon" />
            </div>
            <div className="form__inputWrapper">
              <input className="form__input" type="email" name="email" placeholder="E-mail" required />
              <span className="form__inputIcon" />
            </div>
            <div className={isTrackOpen?"track":"track_disabled"}>
              <img className="track__img" src="./images/man_with_earphones.jpg" alt="img" />
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
            <div className="form__acceptBlock">
              <div className="form__accept">
                <input className="form__acceptChecker" type="checkbox" id="accept" name="accept" />
                <label for="accept"><span></span></label>
                <p className="form__acceptText">I accept the Conditions, data protection and terms of Use</p>
              </div>
              <button className="btnSecondary" type="button">Continue<span className="btn__icon"><RightArrow /></span></button>
            </div>
          </form> 
        </section>
      </div>
      </>
      : <CvCreate />}

     </main>
    
     <footer className="footer">
      <div className="footer__text">Do you need help?</div>
      <div className="footer__profit">
        <span className="footer__profitItem"><span className="footer__profitItemIcon"><Check /></span> 100%</span>
        <span className="footer__profitItem"><span className="footer__profitItemIcon"><Check /></span> no Ads</span>
        <span className="footer__profitItem"><span className="footer__profitItemIcon"><Check /></span> super secure</span>
      </div>
      <div className="footer__imprintBlock">
        <span className="footer__imprint">Imprint</span>
        {/* <select></select> */}
      </div>
    </footer>


    <Button type="submit" className="btnEmail">Btn<span className="btn__icon"><RightArrow /></span></Button>
    <button onClick={()=>setPageName('CV')}>CV</button>
    
    <ModalSkills onCancel={() => setIsModalOpen(false)} isOpen={isModalOpen}>
      
    </ModalSkills>
       
    </div>
  );
}

export default App;
