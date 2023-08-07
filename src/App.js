import React from 'react';

import './App.css';
import { ReactComponent as Insta } from './img/insta.svg';
import { ReactComponent as Email } from './img/email.svg';

function App() {
  return (
    <div>
      <header className="App-header">
        <div className="left-section">
          <img src={'./BT-Secondary.png'} className="App-logo" alt="logo" />
        </div>
      </header>

      <main className='main-cont'>
        <div className='card classic'>
          <h2>Kel's Classic Pic</h2>
          <p>A fermented twist on a classic pickle with loads of garlic, fresh dill and spices.</p>
        </div>

        <div className='card mole'>
          <h2>Mica's Mega Mole</h2>
          <p>A pickle tribute to my great grandma's mole with flavors of smoked chilies, cinnamon, garlic, peppercorn and clove.</p>
        </div>

        <div className='card thai'>
          <h2>Yummy Tom's Thai</h2>
          <p>A Tom Yum soup inspired pickle with notes of Thai chilies, basil, ginger and lemongrass.</p>
        </div>
      </main>

      <footer>
        <a className="foot-link" href="https://www.instagram.com/brinetimesd/">
          <Insta />
          brinetimesd
        </a>
        <a className="foot-email" href="mailto: hello@itsbrinetime.com">
          <Email />
          hello@itsbrinetime.com
        </a>
      </footer>
    </div>
  );
}

export default App;
