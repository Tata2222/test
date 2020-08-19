import React, { useState } from 'react';
import Portal from './Portal';
import { FillCheckCycle, RightArrow } from "./styles/icons/SvgSprite";
import Button from './components/Button';

import './Modal.scss';

export const ModalChanel = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {
  const [isblockAppShow, setBlockAppShow] = useState(false);
  
return(
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className={isOpen ? "modalWindow_short open" : "modalWindow_short"}>
              <div className="modalHeader">
          
                <button name="times" onClick={onCancel}>x</button>

                <section className="section__text">
                  <div className="text__wrapper">
                    <p className="text_primary_lg">Remember, creating your <br/> best application</p>
                    <p className="text_secondary_lg"> 
                      Choosing a channel and we will support you, <br /> that you can start faster at out company.  
                    </p>
                  </div>
                </section>             
              </div>

              <div className="modalBody">
                <div className="footer__profit">
                  <span className="footer__profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> 100%</span>
                  <span className="footer__profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> no Ads</span>
                  <span className="footer__profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> super secure</span>
                </div>

                <section className="section__appSupport">
                  <div className="blockAppWrapper">
                    <Button type="submit" className="btnWhatsApp"  onClick={() => setBlockAppShow(!isblockAppShow)}>
                      Btn
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
                      Btn
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
                      Btn
                      <span className="btn__icon"><RightArrow /></span>
                    </Button>
                    {/*isblockAppShow && <div className="block_WhatsApp"></div>*/}
                  </div>
                  <div className="blockAppWrapper">
                    <Button type="submit" className="btnDiscard" onClick={() => setBlockAppShow(!isblockAppShow)}>
                      Btn
                      <span className="btn__icon"><RightArrow /></span>
                    </Button>
                    {/*isblockAppShow && <div className="block_WhatsApp"></div>*/}
                  </div>
                  <div className="blockAppWrapper">
                    <Button type="submit" className="btnEmail" onClick={() => setBlockAppShow(!isblockAppShow)}>
                      Btn
                      <span className="btn__icon"><RightArrow /></span>
                    </Button>
                    {/*isblockAppShow && <div className="block_WhatsApp"></div>*/}
                  </div>
                </section>

                <div className="changeNumber">
                  <p className="changeNumber__text">Not the correct number?</p>
                  <a href="./" className="changeNumber__link">Change number now</a>
                </div> 
               
              </div>
              <div className="modalFooter">
                 
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};