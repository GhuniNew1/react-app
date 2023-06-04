import React from 'react';
import logo from '../img/logo.gif';
import './Logo.css';


export default function Logo() {
  setTimeout(() => {
    const el = document.getElementById('logo');
  
    el.style.visibility = 'hidden';
    el.style.display = 'none';
  
    
  }, 10000);

  return (
    <>
    
      <div className="logo hide" id="logo">
        <img src={logo} className="logo-gif" alt="logo"  />
      </div>
     
      <div className='bigbrain'>
        <div className="bigbrain-text">
          <h1>BIG BRAIN
            <span>
              &nbsp;STUDIO
            </span>
          </h1>
        </div>
          <h2 className='bigbrain-h2'>
            <span >
              Create&nbsp;
            </span>
            <span className="bigbrain-h2-2">
              the&nbsp;
            </span>
            <span >
              Creation&nbsp;
            </span>
            <span className="bigbrain-h2-2">
              of&nbsp;
            </span>
            <span>
              Animation Intellectual Properties&nbsp;
            </span>
            <span className="bigbrain-h2-2">
              and&nbsp;
            </span>
            <span >
              Contents.
            </span>
          </h2>
      </div>
    </>
  );
}
