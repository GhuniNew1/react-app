import {  useState, useEffect } from "react";
import logo from "./logo.gif";
import "./Logo.css";
import Timer from "./Timer";

export default function Logo() {
  const [boolean, setBoolean] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBoolean(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <header>
      <div className="logo-g">
        <div className="logo-gif">
          <img src={logo} className={boolean ? "logohid" : "logohi"} alt="logo" />
        </div>
      </div>
      <b>
      </b>
      <div className="bigbrain">
        <div className="bigbrain-text">
          <p></p>
          <Timer timers={2000}>
          <h1>
            BIG BRAIN
            <span>&nbsp;STUDIO</span>
          </h1>
          </Timer>
        </div>
        <Timer timers={3000} >
        <h2 className="bigbrain-h2">
          <span>Create&nbsp;</span>
          <span className="bigbrain-h2-2">the&nbsp;</span>
          <span>Creation&nbsp;</span>
          <span className="bigbrain-h2-2">of&nbsp;</span>
          <span>Animation Intellectual Properties&nbsp;</span>
          <span className="bigbrain-h2-2">and&nbsp;</span>
          <span>Contents.</span>
        </h2>
        </Timer>
      </div>
    </header>
  );
}
