import Image from "next/image";
import logo from "../public/Images/Logo_blue.png";
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
          <a><p>Så fungerar det</p></a>
        </Link>
        <Link href="/">
          <a><p>Vårt uppdrag</p></a>
        </Link>
        <Link href="/">
          <a><p>Vanliga frågor</p></a>
        </Link>
        <Link href="/FormPage">
          <a><p>Anmäl ditt intresse</p></a>
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
