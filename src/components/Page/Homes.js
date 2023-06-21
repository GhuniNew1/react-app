import "./Homes.css";
// import Iframe from 'react-iframe'

export default function Homes() {
  document.cookie = "_Pg=Home; SameSite=None; Secure";
  return (
    <div className="home">
      <h2>Showreel</h2>
      <div className="home-1">
        {/* <iframe
          src="https://www.youtube.com/embed/BuuDEn1r8GY"
          width="100%"
          height="100%"
          frameBorder="0"
          loading="lazy"
          title="Big Brain Studio Showreel 2023"
        /> */}
      </div>
    </div>
  );
}
