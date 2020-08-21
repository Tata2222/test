import React, { useState } from 'react';
import { Slide } from './Slide';
import { ChevronLeft, ChevronRight } from '../styles/icons/SvgSprite';

const CARDS = [
  {id: 1, src: './images/woman_with_phone.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
  {id: 2, src: './images/blondman_with_phone.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
  {id: 3, src: './images//blackman.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
  {id: 4, src: './images/man_with_laptop.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
  {id: 5, src: './images/woman_with_laptop.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
  {id: 6, src: './images/woman_with_smile.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
]
  

export const Slider = () => {
  const slideWidth = 285;
  const gap = 16;
  const frameSize = 1;

  const sliderCards = CARDS.map((card, index) => ({
    ...card,
    position: index + 1,
  }));

  const [position, setPosition] = useState(1);
  const [left, setLeft] = useState(0);
  let imgWidth = slideWidth * frameSize + gap * frameSize;

  const handleClick = (path) => {
    const newLeftPosition = (imgWidth) * -path;
    console.log('click')

    if (position === Math.ceil(sliderCards.length) && path === 1) {
      setPosition(1);
      setLeft(0);

      return;
    }

    if (position === 1 && path === -1) {
      setPosition(Math.ceil(sliderCards.length));
      setLeft(imgWidth * path * (Math.ceil(sliderCards.length) - 1));

      return;
    }

    setPosition(position + path);
    setLeft(left + newLeftPosition);
  };

  return (
    <section className="section__slider">
      <div className="slider__wrapper">

        <button className="slider__btn"
          type="button"
          onClick={() => handleClick(-1)}
        >
          <ChevronLeft />
        </button>


      <div className="slide__container">
        <div className="slider__list"
          style={{
          transform: `translateX(${left}px)`,
          transition: `translate 0.3s ease`,
          display: 'grid',
          gridTemplateColumns: `repeat(${sliderCards.length}, 285px)`,
          columnGap: '16px',
          height: '340px',
        }}>
          {sliderCards.map(slide => (
            <Slide slide={slide} />
          ))}
        </div>
      </div>

        <button className="slider__btn"
          type="button"
          onClick={() => handleClick(1)}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}