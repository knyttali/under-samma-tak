import Image from "next/image";
import globe from "../public/Images/Globe.png";
import Link from "next/dist/client/link";
import Logo from "../public/Images/Logo.svg";
import search from "../public/Images/Search.svg";



const Header = () => {
  

  return (
    <div id="header" className="d-flex align-items-center">
      <div id="logoimg">
        <Link href="/">
          <a>
          <Image src={Logo} className="logoImgImg"></Image>
          </a>
        </Link>
      </div>

      <div className="menuItems justify-content-between d-flex">
        <Link href="/">
          <a><p className="how-it-works">Så fungerar det</p></a>
        </Link>
        <Link href="/">
          <a><p id="our-mission">Vårt uppdrag</p></a>
        </Link>
        <Link href="/">
          <a><p id="usual-questions">Vanliga frågor</p></a>
        </Link>
        <Link href="/FormPage">
          <a><p id="show-intrest">Anmäl ditt intresse</p></a>
        </Link>
      </div>

      <div id="languageIconDiv" className="d-flex align-items-center">
        <Image src={search}></Image>
        <div id="globe">
          <Image src={globe}></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
