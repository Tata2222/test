import React from 'react';
import { Line } from "../styles/icons/SvgSprite";

const Header = () => {
  return (
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
  )
}

export default Header;