import React from 'react';

export const UpArrow = () => (
  <svg width="25" height="25" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"/>
  </svg>
);


export const RightArrow = () => (
  <svg 
    width="25" 
    height="25" 
    viewBox="0 0 16 16" 
    className="bi bi-arrow-right" 
    fill="#5c5c5c" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" 
      d="M10.146 4.646a.5.5 0 0 
      1 .708 0l3 3a.5.5 0 0 1 
      0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 
      8l-2.647-2.646a.5.5 0 0 1 0-.708z"
    />
    <path fill-rule="evenodd" 
      d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5
      0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
    />
  </svg>
) 

export const CheckCycle = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 16 16"
    className="bi bi-check-circle"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0
    0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
    />
    <path
      fillRule="evenodd"
      d="M10.97 4.97a.75.75 0
     0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324
     8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236
     0 0 1 .02-.022z"
    />
  </svg>
);

export const FillCheckCycle = ({ width=22, height=22, color='#ef001f' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    className="bi bi-check-circle-fill"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16 8A8 8 0 1 1
    0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417
    5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0
    1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
    />
  </svg>
);

export const Check = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    className="bi bi-check2"
    fill="#797979"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M13.854 3.646a.5.5 0 0 1
    0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0
    1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

export const Cycle = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-circle"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0
    0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
    />
  </svg>
);

export const AlertCycle = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-exclamation-circle"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0
    0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
    />
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0
    1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552
    0 0 1-1.1 0L7.1 4.995z"
    />
  </svg>
);

export const ChevronDown = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-chevron-down"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8
    10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5
    0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
    </svg>
);

export const Line = ({ width=20, height=1 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height} 
    viewBox='0 0 21 1'
  >
    <line id="line" data-name="line" x2="20" 
      transform="translate(0.5 0.5)" 
      fill="none" stroke="#161616" 
      stroke-linecap="round" 
      stroke-width="1" 
      opacity="0.5"
    />
  </svg>
);

export const Plus = () => (
  <svg width="30" height="30" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
    <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
  </svg>
)

export const Close = () => (
  <svg width="25" height="25" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
  </svg>
)

export const Triangle = ({ color }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="15" 
    height="17" 
    viewBox="0 0 15 17"
  >
    <path 
      d="M7.63,1.535a1,1,0,0,1,1.74,0l6.784,11.972A1,1,0,0,1,15.284,15H1.716a1,1,0,0,1-.87-1.493Z" 
      transform="translate(15) rotate(90)" fill={color}
    />
  </svg>
)