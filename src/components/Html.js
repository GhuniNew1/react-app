import React from "react";


export default function Html({ assets, children }) {
  return (
    <>
      {children}
      {assets}
    </>
  );
}
