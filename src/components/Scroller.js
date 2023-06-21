import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Scroller({children, asset}) {

  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    const heightToHideFrom =asset;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll < heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  // console.log(isVisible,height);
  return (
    <div>
      <b>
        height: {height} - {isVisible ? "show" : "hide"}
      </b>
      {isVisible && <>{children}</>}
    </div>
  );
}
