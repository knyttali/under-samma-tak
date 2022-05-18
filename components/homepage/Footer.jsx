import Image from "next/image"
import logos from "../../public/Images/Social media logos (1).svg"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left-right">
        <div className="footer-left col-5">
      
          <div>
            <h4>Vision &amp; Mission </h4>
            <p>
              Metus, faucibus nunc, lorem vitae viverra volutpat etiam nisi,
              arcu. Ultricies nibh integer scelerisque pellentesque ornare. Sed
              auctor turpis bibendum nunc turpis faucibus facilisi pretium
              tempor. Praesent tellus non nibh nulla quis amet id nullam. Et
              felis, in nec consectetur.
            </p>
          </div>
          <div>
            <h4>Hitta snabbt</h4>
            <div className="footer-links">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
              <a>Link 4</a>
              <a>Link 5</a>
            </div>
          </div>
          <div>
            <h4>Kontakta oss</h4>
            <p>Tel: 076543219</p>
            <p>Om initiativet: info@undersammatak.se</p>
            <p>Media: press@undersammatak.se</p>
            <p>För näringslivet: foretag@undersammatak.se</p>
          </div>
        </div>
        <div className="footer-right col-7">
          <div className="col-2 footer-item">
            <h4>KOMMUNER</h4>
            <div className="footer-links">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
              <a>Link 4</a>
              <a>Link 5</a>
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
              <a>Link 4</a>
              <a>Link 5</a>
            </div>
          </div>
          <div className="col-2 footer-item">
            <h4>PARTNERS</h4>
            <div className="footer-links">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
              <a>Link 4</a>
              <a>Link 5</a>
            </div>
          </div>
          <div className="col-3 footer-item">
            <h4>SAMARBETSAKTÖRER</h4>
            <div className="footer-links">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
              <a>Link 4</a>
              <a>Link 5</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mellanrum">Mellanrum</div>
      <div className="footer-bottom">
        <div className="footer-bottom-top"><h3>Under Samma Tak</h3><div className="footer-image"><Image src={logos}></Image></div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
