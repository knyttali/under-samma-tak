import Image from "next/image"
import logo from "../public/Images/Logo_blue.png"
import globe from "../public/Images/Vector.png"

const Header = () => {
  return (
    <div id="header" className="d-flex align-items-center">

    <div id="logoDiv">
        <a href=''>
            <Image src={logo}>
            </Image>
        </a>
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
