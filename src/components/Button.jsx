import React from 'react';
import classNames from 'classnames';
/*import styles from './Button.scss';*/


const Button = ({
  children, onClick, className='', disabled=false, active="false", ...attrs
}) => {

  return (
    <button
      className={classNames(className)}
      disabled={disabled}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};


export default Button;