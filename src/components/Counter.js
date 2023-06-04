import { useState } from "react";
import Speed from "./Speed.js";

export default function Counter() {
  const [show, setShow] = useState(false);
  return (
    <>
    <div className="divm">
    <button className="btn" onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} Speed
      </button>
    </div>

      {show && (
        <label>
          <Speed />
        </label>
      )}
    </>
  );
}
