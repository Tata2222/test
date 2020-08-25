import React from 'react';

import { FillCheckCycle } from "../styles/icons/SvgSprite";


export const Slide = ( {slide} ) => {
  return (

     <div className="slide" style={{background: `url('${slide.src}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

        <div className="slide__block">
          <div className="points">
            <span className="points__checkedLabel">
              <span className="points__checkedLabelIcon"><FillCheckCycle width={20} hight={20} color={'#e6e6e6'} /></span>
              +500
            </span>
          </div>
       {/* <img className='slide__img' src={slide.src} alt='slide_img' />*/}

        <section className="slide__info">

          <p className="slide__title">{slide.title}</p>
          <ul className="slide__list">
            {slide.textList.map((item, index) => (
              <li className="slide__item" key={index}>{item}</li>
            ))}
          </ul>
        
        </section>
        </div>
       
 </div>
  )
}