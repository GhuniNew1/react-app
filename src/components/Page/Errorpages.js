import "./Errorpages.css";
export default function Errorpages() {
  document.cookie = "_Pg=Errorpage; SameSite=None; Secure";
  return (
    <div className="Errorpages">
      <h2>Errorpage</h2>
      <div className="Errorpages-1">

        <div className="Errorpages-2">
        <iframe src="/speedtest/index.html"
          width="100%"
          height="100%"
          loading="lazy"
          frameBorder="0"
          title="Speed Test"
        />
        </div>

      </div>
    </div>
  );
}
