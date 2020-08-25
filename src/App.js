import React, { useState } from 'react';

import { ModalVideoclip } from './ModalVideoclip';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/login';
import Information from './pages/information';
import CV from './pages/cv';
import Application  from './pages/application';
import Summary from './pages/summary';

import CvUpload from './pages/uploadcv';
import CvCreate from './pages/createcv';

import Channel from './pages/channel';
import Apply from './pages/apply';
import PhoneInterview from './pages/interview';
import ShortApplication from './pages/shortapplication'
import VideoClip from './pages/videoclip';
import VoiceMessage from './pages/voicemessage';
import Forgot from './pages/forgotpassword';
import Reset from './pages/resetpassword';

import './App.scss';
import { CoverLetter } from './pages/coverletter';


function App() {
  const [isModalOpen, setIsModalOpen]= useState(false);

 
  return (
    <div className="container" id="container" style={{maxWidth:'400px', margin: 'auto', border: '1px solid black'}}>
    
      <Header />

      <main className="main">
    
      <BrowserRouter >
        <Nav />
        <Switch>
          <Route path="/" exact render={() => <Login />} />

          <Route path="/information" exact>
            <Information />
          </Route>

          <Route path="/cv" exact>
            <CV />
          </Route>

          <Route path="/application" exact>
            <Application />
          </Route>

          <Route path="/summary" exact>
            <Summary />
          </Route>

          <Route path="/channel" exact>
            <Channel />
          </Route>

          <Route  path="/uploadcv" exact>
            <CvUpload />
          </Route>
          
          <Route  path="/createcv" exact>
            <CvCreate />
          </Route>

          <Route  path="/apply" exact>
            <Apply />
          </Route>

          <Route  path="/interview" exact>
            <PhoneInterview />
          </Route>

          <Route  path="/shortapplication" exact>
            <ShortApplication />
          </Route>

          <Route  path="/videoclip" exact>
            <VideoClip />
          </Route>

          <Route  path="/voicemessage" exact>
            <VoiceMessage />
          </Route>

          <Route path="/forgotpassword" exact>
            <Forgot />
          </Route>

          <Route path="/resetpassword" exact>
            <Reset />
          </Route>

          <Route path="/coverletter" exact>
            <CoverLetter />
          </Route>

        </Switch>
      </BrowserRouter>

    </main>
    <Footer />
    
    
    <ModalVideoclip onCancel={() => setIsModalOpen(false)} isOpen={isModalOpen}></ModalVideoclip>   
    </div>
  );
}

export default App;
