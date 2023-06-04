import React from "react";

export default function Spinner({active = true}) {
  return (
    <div className="container1">
          <div
      className={['spinner', active && 'spinner--active'].join(' ')}
      role="progressbar"
      aria-busy={active ? 'true' : 'false'}
    />
    </div>
  );
}
