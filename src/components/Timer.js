import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Timer({ children , timers }) {
  const [boolean, setBoolean] = useState(false);
  
  useEffect(() => {
    const times = setTimeout(() => {
      setBoolean(true);
    }, timers);
    
    return () => clearTimeout(times);
  }, [timers]);

  return <div>{boolean && <>{children}</>}</div>;
}
