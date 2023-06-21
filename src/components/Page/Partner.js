import './Partner.css'
import { Pdata1,Pdata2 } from './Partner-data';
import { useState } from 'react';

export default function Partner() {
    const [hidden, setHidden] = useState(true);
  return (
      <div className="partner">
        <h2>PartNer</h2>
        <div>
          {!hidden ? (<Pdatas1 /> ): (<Pdatas2 />)}
        </div>
        <button className="btn" onClick={() => setHidden(s => !s)}>&#9675;
          {hidden ? "Show" : "Hide"}
        </button>
      </div>
  );
}

function Pdatas1() {
    const listItems = Pdata1.map((datap) => (
        <div key={datap.id} className='partner-2'>
          <a href={datap.href} rel="noreferrer" target="_blank">
            <img src={datap.url} alt={datap.alt} />
          </a>
        </div>
      ));
    return (
      <>
        <div className="partner-1">
          <div className="partner-3">
            {listItems[1]}
          </div>
        </div>
        <div className="partner-1">
          <div className="partner-4">
            {listItems}

          </div>
        </div>
      </>
    );
} 
function Pdatas2() {
    const listItems = Pdata2.map((datap) => (
        <div key={datap.id} className='partner-2'>
          <a href={datap.href} rel="noreferrer" target="_blank">
            <img src={datap.url} alt={datap.alt} />
          </a>
        </div>
      ));
    return (
      <>
        <div className="partner-1">
          <div className="partner-3">
            {listItems}
          </div>
        </div>
        <div className="partner-1">
          <div className="partner-4">
            {listItems[0]}

          </div>
        </div>
      </>
    );
} 