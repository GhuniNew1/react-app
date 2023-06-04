import { useState, useRef } from 'react';

export default function Stopime() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);


  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

 
  return (
    <>

<div className='home-container'>
        <p>Time Test</p>
        <div className='card-container'>
          <span className='card'>
            <span className='card-main-heading'>

              <button onClick={handleStart} >
                Start
              </button>
              <button onClick={handleStop}>
                Stop
              </button>

            </span>
            <span className='card-info'>
              <ion-icon name="Time Test"></ion-icon>
              <span className='card-info-msg'>
              <p>{secondsPassed.toFixed(3)}</p>
              </span>
            </span>
          </span>
        </div>

      </div>
    </>
  );
}