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
            <Image src={Logo}></Image>
          </a>
        </Link>
      </div>

      <div className="menuItems justify-content-between d-flex">
        <Link href="/">
          <a>Så fungerar det</a>
        </Link>
        <Link href="/">
          <a>Vårt uppdrag</a>
        </Link>
        <Link href="/">
          <a>Vanliga frågor</a>
        </Link>
        <Link href="/FormPage">
          <a>Anmäl ditt intresse</a>
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
