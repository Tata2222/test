import React, { useState } from 'react';
import Portal from './Portal';
import { FillCheckCycle, RightArrow, Close, WhatsApp, Line  } from "./styles/icons/SvgSprite";
import Button from './components/Button';

import './Modal.scss';

export const ModalChannel = ({
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
          
                <button className="btnCloseModal" name="times" onClick={onCancel}><Close /></button>
                <span className="modalHeader__icon"><Line width={50} height={3} /></span>
                <div className="gap" style={{marginTop: '20px'}}></div>
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
                <div className="profit">
                  <span className="profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> 100%</span>
                  <span className="profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> no Ads</span>
                  <span className="profitItem"><span className="footer__profitItemIcon"><FillCheckCycle width={15} hight={15} /></span> super secure</span>
                </div>

                <section className="section__appSupport">

                  <div className="blockAppWrapper">
                    <div className={isblockAppShow ? "block_WhatsApp": "block_WhatsApp open" }>
                        <Button type="submit" className="btnWhatsApp"  onClick={() => setBlockAppShow(!isblockAppShow)}>
                          <WhatsApp />
                          <span className="btn__icon"><RightArrow /></span>
                        </Button>

                      <div className="block__wrapper">
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
                    </div> 
                  </div>

                  <div className="blockAppWrapper">
                    <div className={isblockAppShow ? "blockAccept_Telegram": "blockAccept_Telegram open" }> 
                      <Button type="submit" className="btnTelegram" onClick={() => setBlockAppShow(!isblockAppShow)}>
                        <img src="./images/telegram.svg" alt="telegram" />
                        <span className="btn__icon"><RightArrow /></span>
                      </Button>

                      <div className="block__wrapper">
                        <p className="block__textPrimary_lg">We look forward to you  <br />  and your application</p>
                        <div className="block__back">
                          <p className="block__backText">Back in</p>
                          <div className="block__backNumber"> 3</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blockAppWrapper"> 
                    <div className={isblockAppShow ? "block_Sms": "block_Sms open" }> 
                      <Button type="submit" className="btnSms" onClick={() => setBlockAppShow(!isblockAppShow)}>
                        <img src="./images/sms.svg" alt="sms" />
                        <span className="btn__icon"><RightArrow /></span>
                      </Button>
                      <div className="block__wrapper">
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
                    </div>
                  </div>

                  <div className="blockAppWrapper">
                    <div className={isblockAppShow ? "block_Discard": "block_Discard open" }> 
                      <Button type="submit" className="btnDiscard" onClick={() => setBlockAppShow(!isblockAppShow)}>
                        <img src="./images/discard.svg" alt="discard" />
                        <span className="btn__icon"><RightArrow /></span>
                      </Button>
                      <div className="block__wrapper">
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
                      </div>
                  </div>


                  <div className="blockAppWrapper">
                    <div className={isblockAppShow ? "block_Email": "block_Email open" }> 
                    <Button type="submit" className="btnEmail" onClick={() => setBlockAppShow(!isblockAppShow)}>
                      <img src="./images/email.svg" alt="email" />
                      <span className="btn__icon"><RightArrow /></span>
                    </Button>
                    <div className="block__wrapper">
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
                      </div> 
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};