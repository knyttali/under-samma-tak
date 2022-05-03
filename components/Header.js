import Image from "next/image";
import logo from "../public/Images/Logo_blue.png";
import globe from "../public/Images/Globe.png";
import Link from "next/dist/client/link";
import Logo from "../public/Images/Logo.svg";

const Header = () => {
  return (
    <div id="header" className="d-flex align-items-center">
      

        <Link href="/">
          <a>
            <Image src={Logo} className="logoimg"></Image>
          </a>
        </Link>


      <div id="languageIconDiv" className="d-flex align-items-center">
        <div id="globe">
          <Image src={globe}></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
