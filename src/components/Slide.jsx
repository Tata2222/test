import React from 'react';

import { RightArrow, FillCheckCycle } from "../styles/icons/SvgSprite";
import Button from './Button';


export const Slide = ( {slide} ) => {
  return (

     <div className="slide">
        <span className="slide__icon"><FillCheckCycle width={20} height={20} /></span>
        <img className='slide__img' src={slide.src} alt='slide_img' />

        <section className="slide__info">

          <p className="slide__title">{slide.title}</p>
          <ul className="slide__list">
            {slide.textList.map((item, index) => (
              <li className="slide__item" key={index}>{item}</li>
            ))}
          </ul>
          <Button className="btnSlide"><RightArrow /></Button>
        </section>
 </div>
  )
}