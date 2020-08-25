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

export const FillCheckCycle = ({ width=20, height=20, color='#ef001f' }) => (
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

export const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23.333" height="23.394" viewBox="0 0 23.333 23.394">
    <path d="M223.409,507.752a17.871,17.871,0,0,0-4.629-3.506c-.889-.469-1.309-.362-1.877.472-.186.272-.363.549-.541.827-.193.3-.388.606-.593.9a7.261,7.261,0,0,1-.763.957.784.784,0,0,1-1.056.148c-.164-.072-.328-.144-.49-.228a15.727,15.727,0,0,1-3.95-2.95,15.094,15.094,0,0,1-3.334-4.652.737.737,0,0,1,.1-.821,3.8,3.8,0,0,1,1.044-.885l.634-.41c.4-.257.8-.515,1.194-.788a1.139,1.139,0,0,0,.436-1.733,15.46,15.46,0,0,0-1.7-2.655,12.984,12.984,0,0,0-2.213-2.348,1.3,1.3,0,0,0-1.467-.151,7.5,7.5,0,0,0-3.027,2.615,2.908,2.908,0,0,0-.532,1.807,14.031,14.031,0,0,0,.783,4.008,21.083,21.083,0,0,0,3.8,6.569,24.109,24.109,0,0,0,9.359,7.127,13.82,13.82,0,0,0,4.867,1.1,1.747,1.747,0,0,0,.237.015,2.68,2.68,0,0,0,1.391-.449,7.91,7.91,0,0,0,2.6-2.782A1.668,1.668,0,0,0,223.409,507.752Z" transform="translate(-200.641 -489.774)" fill="#0087ef"/></svg>
)

export const WhatsAppPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23.008" height="23.033" viewBox="0 0 23.008 23.033"><path d="M68.494,91.354l1.611-5.723a11.484,11.484,0,1,1,4.29,4.2Zm6.2-3.609.352.215a9.538,9.538,0,1,0-3.07-3l.237.369-.928,3.3Z" transform="translate(-68.494 -68.321)" fill="#fff"/><path d="M150.179,152.867l-.745-.041a.9.9,0,0,0-.641.219,3.4,3.4,0,0,0-1.117,1.711,5.187,5.187,0,0,0,1.2,4.066,12.1,12.1,0,0,0,6.52,4.74,3.178,3.178,0,0,0,2.691-.333,2.407,2.407,0,0,0,1.047-1.528l.119-.556a.386.386,0,0,0-.216-.432l-2.52-1.161a.386.386,0,0,0-.468.115l-.989,1.282a.283.283,0,0,1-.318.095,7.746,7.746,0,0,1-4.191-3.587.286.286,0,0,1,.036-.319l.945-1.094a.386.386,0,0,0,.063-.4l-1.086-2.541A.386.386,0,0,0,150.179,152.867Z" transform="translate(-141.888 -146.725)" fill="#fff"/></svg>
)

export const LiveChat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="27.791" height="22.341" viewBox="0 0 27.791 22.341"><g transform="translate(0.5 0.5)"><path d="M874.76,408.177h25.217a.786.786,0,0,1,.787.786v16.15a.786.786,0,0,1-.787.786h-5.818a.146.146,0,0,0-.145.146V429.3a.212.212,0,0,1-.315.185L887.484,426a.784.784,0,0,0-.384-.1H874.76a.785.785,0,0,1-.787-.786v-16.15A.786.786,0,0,1,874.76,408.177Z" transform="translate(-873.973 -408.177)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/><ellipse cx="1.437" cy="1.437" rx="1.437" ry="1.437" transform="translate(17.826 10.718)" fill="#fff"/><ellipse cx="1.437" cy="1.437" rx="1.437" ry="1.437" transform="translate(12.861 10.718)" fill="#fff"/><ellipse cx="1.437" cy="1.437" rx="1.437" ry="1.437" transform="translate(7.982 10.718)" fill="#fff"/></g></svg>
)

export const ReverseCycle = () => (

  <svg xmlns="http://www.w3.org/2000/svg"
    width="21" 
    height="21"
    viewBox="0 0 21 21"
    >
    <circle cx="10.5" cy="10.5" r="10.5" 
    fill="#fff"/><path d="M396.551,267.55a4.776,4.776,0,0,1,3.554-4.616" 
    transform="translate(-390.727 -256.779)" fill="none" stroke="#ef001f"
    stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <path d="M410.477,336.707a4.754,4.754,0,0,1-8.537,0" transform="translate(-395.625 -323.881)" 
    fill="none" stroke="#ef001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
    />
    <path d="M459.438,262.276a4.775,4.775,0,0,1,3.811,4.676" transform="translate(-447.905 -256.181)" 
    fill="none" stroke="#ef001f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
</svg>
)

export const Eye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="11" viewBox="0 0 21 11"><g transform="translate(5)" fill="none" stroke="#161616" stroke-width="1"><circle cx="5.5" cy="5.5" r="5.5" stroke="none"/><circle cx="5.5" cy="5.5" r="5" fill="none"/></g><g fill="none" stroke="#161616" stroke-width="1"><ellipse cx="10.5" cy="5.5" rx="10.5" ry="5.5" stroke="none"/><ellipse cx="10.5" cy="5.5" rx="10" ry="5" fill="none"/></g></svg>
)

export const ChevronLeft = () => (
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="#a0a0a0" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
</svg>
);

export const ChevronRight = () => (
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="#a0a0a0" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
</svg>
);