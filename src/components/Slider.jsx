import React, { useState } from 'react';
import { Slide } from './Slide';

const CARDS = [
  {id: 1, src: './images/woman_with_phone.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
  {id: 1, src: './images/woman_with_phone.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
  {id: 1, src: './images/woman_with_phone.jpg', title: 'Your Videovlip', textList: ['Most popular', 'Introduction in 30 sec']},
]
  

export const Slider = () => {
  const slideWidth = 225;
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

    if (position === Math.ceil(sliderCards.length/4) && path === 1) {
      setPosition(1);
      setLeft(0);

      return;
    }

    if (position === 1 && path === -1) {
      setPosition(Math.ceil(sliderCards.length/4));
      setLeft(imgWidth * path * (Math.ceil(sliderCards.length/4) - 1));

      return;
    }

    setPosition(position + path);
    setLeft(left + newLeftPosition);
  };

  return (
    <section className="section__slider">
      <div className="slider__wrapper">


        <div className="slider__btnPanel">

          <button className="slider__btn"
            type="button"
            onClick={() => handleClick(-1)}
          >
            left
          </button>

          <button className="slider__btn"
            type="button"
            onClick={() => handleClick(1)}
          >
            right
          </button>

        </div>

      </div>

      <div className="slide__container">
        <div className="slider__list"
          style={{
          transform: `translateX(${left}px)`,
          transition: `translate ease 0.3s`,
          display: 'grid',
          gridTemplateColumns: `repeat(${sliderCards.length}, 225px)`,
          columnGap: '16px',
        }}>
          {sliderCards.map(slide => (
            <Slide slide={slide} />
          ))}
        </div>
      </div>
    </section>
  )
}