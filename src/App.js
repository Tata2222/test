import React, { useState } from 'react';
import logo from './logo.svg';
import { Modal } from './Modal';
import './App.scss';

function App() {
  const [isMadalOpen, setModalOpen]= useState(false);

  const handleSubmit = () => {
    console.log('Submit function!');
    setModalOpen(false);
  }

  const handleCancel = () => {
    console.log('Cancel function!');
    setModalOpen(false);
  }
 
  return (
    <div className="App">
      <header className="header">
       <div className="header header__container">
         <div className="header progress-bar">
            <ul className="progress-bar__list">
              <li className="progress-bar__item">Information</li>
              <li className="progress-bar__item">CV</li>
              <li className="progress-bar__item">Application</li>
            </ul>
          </div>
        </div>
      </header>
     <main className="main">
      <div className="point__container">
        <img className="section__img" src="./bild.jpg" alt="" />
        <span className="section__label" onClick={() => setModalOpen(true)}>200</span>
      <>
  
   
        <Modal
          title="Test Dialog window"
          isOpen={isMadalOpen}
          onCancel={() => handleCancel()}
          onSubmit={() => handleSubmit()}
        >
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
        </Modal>

      </>

      </div>
      <div className="info__container">
        <section className="section">
          <div className="section__text">
            <p className="section__primaryText">Please give us you contact information</p>
            <p className="section__secondaryText">so that we can reach you faster.</p>
          </div>
        </section>
        <section  className="section">
          <form className="form section__form">
            <div className="form__checkboxPanel">
              <input type="checkbox" id="female" name="female" value="female" />
              <label for="female">Female</label>
              <input type="checkbox" id="male" name="male" value="male" />
              <label for="male"> Male</label>
              <input type="checkbox" id="diverse" name="diverse" value="diverse" />
              <label for="diverse">Diverse</label>
            </div>
            <input className="form__input" type="text" name="name" placeholder="Name" required/>
            <input className="form__input" type="text" name="lastname" placeholder="Last Name" required/>
            <select className="form__input"  name="city" required>
              <option value="">City</option>
            </select>
            <select className="form__input"  name="birthday" required>
              <option value="">Birthday</option>
            </select>
            <input className="form__input" type="tell" name="phone" placeholder="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            <input className="form__input" type="email" name="email" placeholder="Email" required />
            <button className="btnSubmit" type="button">Continue</button>
          </form>
        </section>
      </div>
    
     </main>
     <footer className="footer">
     <img src={logo} className="App-logo" alt="logo" />
     </footer>
    </div>
  );
}

export default App;
