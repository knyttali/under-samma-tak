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
      <div id = "globe">
        <Image src={globe}></Image>
        </div>
        <div className="language" id="languageText">
        <p>
            Language
        </p>
        </div>
    </div>
    </div>
  )
}

export default Header;
