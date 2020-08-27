import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.scss';

export const CustomModal = ({
  children,
  closeEvent,
  closeEventOutside,
  timeout = 300,
}) => {
  const modal = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOutside = (event) => {
    if (modal.current) {
      if (event.target && !modal.current.contains(event.target)) {
        setIsOpen(false);
        setTimeout(closeEventOutside, timeout);
      }
    }
  };
  const handleCloseClick = () => {
    setIsOpen(false);
    setTimeout(closeEvent, timeout);
  };
  useEffect(() => {
    setIsOpen(true);
    const collection = document.getElementsByTagName('body');
    if (collection.length !== 0) collection[0].setAttribute('style', 'overflow: hidden');
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      if (collection.length !== 0) collection[0].setAttribute('style', 'overflow: initial');
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <CSSTransition
        unmountOnExit
        in={isOpen}
        timeout={timeout}
        classNames="myNode"
      >
        <div className="myNode">
          <div className={styles.modalWindow} ref={modal}>
            <div className="d-flex flex-column">
              <i id="test" className={styles.close} onClick={handleCloseClick} role="button" tabIndex="0" aria-label="test">X</i>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>,
    </div>,
    document.body,
  );
};
