import Clock from "./Clock";
import Stoptime from "./Stoptime";
import './Click.css';
import React,{useState} from "react";


export default function Click() {
const [hidden, setHidden] = useState(true);
const [hidden2, setHidden2] = useState(true);
  return (
    <>
      <div className="divm">

        <div>
          <button className="btn" onClick={() => setHidden(s => !s)}>
          {hidden ? "Show" : "Hide"}
          </button>
        </div>

        <div>
          <button className="btn" onClick={() => setHidden2(s => !s)}>
          {hidden2 ? "Show" : "Hide"}
          </button>
        </div>
      </div>
      <div>
        <div>
          {!hidden ? <><Clock /></> : null}
        </div>
        <div>
          {!hidden2 ? <><Stoptime /></> : null}
        </div>
      </div>
    </>
  );
}
