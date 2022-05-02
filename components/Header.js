import Image from "next/image"
import logo from "../public/Images/Logo_blue.png"
import globe from "../public/Images/Vector.png"
import Link from "next/dist/client/link"

const Header = () => {
  return (
    <div id="header" className="d-flex align-items-center">

    <div id="logoDiv">
      <Link href ="/">
        <a>
            <Image src={logo}>
            </Image>
        </a>
        </Link>
    </div>

    <div id="languageIconDiv" className="d-flex align-items-center">
        <Image src={globe}></Image>
        <p className="language" id="languageText">
            Language
        </p>
    </div>
    </div>
  )
}

export default Header;
