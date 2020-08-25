import React, { useState } from 'react';
import { FillCheckCycle, RightArrow } from "../styles/icons/SvgSprite";
import Button from '../components/Button';

const Channel = () => {
  const [isblockAppShow, setBlockAppShow] = useState(false);
  
return(
    <>
      <div className="section__company">
        <div className="company__proposition">
          <img className="company__logo" src="./images/proSiebenSat_logo.svg" alt="logo"/>
          <div className="company__vacancy">Praktikant (m/w/d) Corporate Controlling</div>
        </div>
        <div className="company__imgWrapper">
          <img className="company__img" src="./images/bild.jpg" alt="company_image" />

        </div>
      </div>

      <div className="info__container">

        <section className="section__text">
          <div className="text__wrapper">
            <p className="text_primary_lg">Remember, creating your <br/> best application</p>
            <p className="text_secondary_lg"> 
              Choosing a channel and we will support you, <br /> that you can start faster at out company.  
            </p>
          </div>
        </section>             
          
        <div className="profit">
          <span className="profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> 100%</span>
          <span className="profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> no Ads</span>
          <span className="profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> super secure</span>
        </div>

        <div className="chanel__container">
          <section className="section__appSupport">
            <div className="blockAppWrapper">
              <Button type="submit" className="btnWhatsApp"  onClick={() => setBlockAppShow(!isblockAppShow)}>
                <img src="./images/whatsApp.svg" alt="telegram" />
                <span className="btn__icon"><RightArrow /></span>
              </Button>

              {isblockAppShow && 
              <div className="block_WhatsApp">

                <p className="block__textPrimary">A free reminder <br /> and support for you</p>

                <form className="form">
                  <div className="form__phoneBlock">
                    <select className="form__input_code"  name="code" required>
                      <option value="">+49</option>
                    </select>
                    <input className="form__input_phone" type="tell" name="phone" placeholder="1761232132" pattern="[0-9]{11}" required />
                  </div>
                </form>

                <Button type="submit" className="btnRemind"  onClick={() => setBlockAppShow(!isblockAppShow)}>
                  Remind
                  <span className="btn__icon"><RightArrow /></span>
                </Button>

                <p className="block__textAccept">
                  With clicking this button, you accepting the <br /> conditions, data protection and Terms of Use
                </p>
                
              </div>
              }
            </div>
            <div className="blockAppWrapper">
              <Button type="submit" className="btnTelegram" onClick={() => setBlockAppShow(!isblockAppShow)}>
                <img src="./images/telegram.svg" alt="telegram" />
                <span className="btn__icon"><RightArrow /></span>
              </Button>

              <div className="blockAccept">

                <p className="block__textPrimary_lg">We look forward to you  <br />  and your application</p>
                <div className="block__back">
                  <p className="block__backText">Back in</p>
                  <div className="block__backNumber"> 3</div>
                </div> 

              </div>

            </div>
            <div className="blockAppWrapper">
              <Button type="submit" className="btnSms" onClick={() => setBlockAppShow(!isblockAppShow)}>
                <img src="./images/sms.svg" alt="sms" />
                <span className="btn__icon"><RightArrow /></span>
              </Button>
              {/*isblockAppShow && <div className="block_WhatsApp"></div>*/}
            </div>
            <div className="blockAppWrapper">
              <Button type="submit" className="btnDiscard" onClick={() => setBlockAppShow(!isblockAppShow)}>
                <img src="./images/discard.svg" alt="discard" />
                <span className="btn__icon"><RightArrow /></span>
              </Button>
              {/*isblockAppShow && <div className="block_WhatsApp"></div>*/}
            </div>
            <div className="blockAppWrapper">
              <Button type="submit" className="btnEmail" onClick={() => setBlockAppShow(!isblockAppShow)}>
                <img src="./images/email.svg" alt="email" />
                <span className="btn__icon"><RightArrow /></span>
              </Button>
              {/*isblockAppShow && <div className="block_WhatsApp"></div>*/}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Channel;