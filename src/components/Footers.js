import './Footers.css'
import { Fdata } from './Footers-data';
// import Scroller  from './Scroller';

const listItems = Fdata.map(dataf =>
  <div key={dataf.id}>
  <a href={dataf.href} rel='noreferrer' target='_blank'>
    <img
      src={dataf.url}
      alt={dataf.alt}
    /></a>
  </div>
   );

export default function Footers() {
  return (
    <>
    {/* <Scroller asset={10}> */}
      <footer className="footer-main">
        <div className="footer">
          <div className="footer-1">
            <div className="footer-3">
              <p>151 Sukhumvit 101/1, Bangchak,</p>
              <p>Phrakhanong, Bangkok 10260, Thailand</p>
              <br />
              <br />
              <p>Copyright @ Big Brain Studio</p>
            </div>
            <div className="footer-4">
              <div className="footer-5">
                {listItems[0]}
                {listItems[1]}
                {listItems[2]}
              </div>
              <div className="footer-5">
                {listItems[3]}
                {listItems[4]}
                {listItems[5]}
              </div>
            </div>
            <div className="footer-2">
              <p>
                Email:
                <a href="mailto:iambigbrainstudio@gmail.com">
                  iambigbrainstudio@gmail.com
                </a>
              </p>
              <br />
              <br />
              <p>Fax: +662 118 3624&nbsp; Tel: &nbsp;+662 118 3920</p>
              <p>Cell: +669 4539 5991</p>
            </div>
          </div>
        </div>
      </footer>
      {/* </Scroller> */}
    </>
  );
}