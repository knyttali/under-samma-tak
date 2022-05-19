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
              <a>Så fungerar det</a>
              <a>Vårt uppdrag</a>
              <a>Vanliga frågor</a>
              <a>Anmäl ditt intresse</a>
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
              <a>Stockholm</a>
              <a>Göteborg</a>
              <a>Malmö</a>
              <a>Uppsala</a>
              <a>Linköpings</a>
              <a>Örebro</a>
              <a>Västerås</a>
              <a>Helsingborgs</a>
              <a>Norrköpings</a>
              <a>Jönköpings</a>
              <a>Umeå</a>
              <a>Lunds</a>
              <a>Borås</a>             
              <a>Huddinge</a>
              <a>Eskilstuna</a>
              <a>Gävle</a>
              <a>Halmstad</a>
            </div>
          </div>
          <div className="col-2 footer-item">
            <h4>PARTNERS</h4>
            <div className="footer-links">
              <a>Airbnb.org</a>
              <a>Beredskapslyftet</a>
              <a>Rädda Barnen</a>
              <a>Stadsmissionen</a>
            </div>
          </div>
          <div className="col-3 footer-item">
            <h4>SAMARBETSAKTÖRER</h4>
            <div className="footer-links">
              <a>UNICEF Sverige</a>
              <a>UNHCR</a>
              <a>World Childhood Foundation</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mellanrum">Mellanrum</div>
      <div className="footer-bottom">
        <div className="footer-bottom-top"><h3>Under Samma Tak</h3><div className="footer-image"><Image src={logos}></Image></div></div>
        <div><p>© Copyright Under Samma Tak AB</p></div>
      </div>
    </div>
  );
}

export default Footer;
