import React from 'react';
import classNames from 'classnames';
/*import styles from './Button.scss';*/


const Button = ({
  children, onClick, className='', disabled=false, active="false", ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };


  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={classNames(className, {[active]: active})}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
};


export default Button;