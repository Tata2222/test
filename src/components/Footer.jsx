import React from 'react';
import { Check } from "../styles/icons/SvgSprite";

const Footer = () => (

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
)


export default Footer;