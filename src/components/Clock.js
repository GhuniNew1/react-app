import { useState, useEffect } from "react";
import './Home.css'

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Clock() {
  const time = useTime();
  const [color, setColor] = useState("lightcoral");
  return (
    <>
      <div className='home-container'>
        <p>Date</p>
        <div className='card-container'>
          <span className='card'>
            <span className='card-main-heading'>
              <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="lightcoral">light</option>
                <option value="midnightblue">blue</option>
                <option value="rebeccapurple">purple</option>
                <option value="red">red</option>
                <option value="white">white</option>
              </select>
            </span>
            <span className='card-info'>
              <ion-icon name="Date"></ion-icon>
              <span className='card-info-msg'>
                <p style={{ color: color }}>
                  {time.toLocaleTimeString()}
                </p>
              </span>
            </span>
          </span>
        </div>

      </div>


    </>
  );
}
