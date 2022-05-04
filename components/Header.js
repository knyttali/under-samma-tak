import Image from "next/image";
import globe from "../public/Images/Globe.png";
import Link from "next/dist/client/link";
import Logo from "../public/Images/Logo.svg";
import search from "../public/Images/Search.svg";
import React, {useState} from "react";
import hoverGlobe from "../public/Images/globehover.svg"
import hoverSearch from"../public/Images/SearchHover.svg"


const Header = () => {
  const[hoverState, setState] = useState(
  <div id="languageIconDiv" className="d-flex align-items-center">
    <div id="searchIcon">
    <Image src={search} onMouseOver={searchHover}></Image>
    </div>
    <div id="globe" onMouseOver={globeHover}>
      <Image src={globe}></Image>
    </div>
  </div>
)


function globeHover(){
  setState(
  <div id="languageIconDiv" className="d-flex align-items-center">
    <div id="searchIcon">
    <Image src={search}></Image>
    </div>
    <div id="globe" onMouseLeave={globeNormal}>
      <Image src={hoverGlobe}></Image>
    </div>
  </div>

  )
  function globeNormal() {
    setState(
  <div id="languageIconDiv" className="d-flex align-items-center">
    <div id="searchIcon" onMouseOver={searchHover}>
    <Image src={search}></Image>
    </div>
    <div id="globe"onMouseOver={globeHover}>
      <Image src={globe}></Image>
    </div>
  </div>

    )
  }

}
function searchHover(){
  setState(
  <div id="languageIconDiv" className="d-flex align-items-center">
    <div id="searchIcon"onMouseLeave={searchNormal}>
    <Image src={hoverSearch}></Image>
    </div>
    <div id="globe" >
      <Image src={globe}></Image>
    </div>
  </div>

  )
  function searchNormal() {
    setState(
  <div id="languageIconDiv" className="d-flex align-items-center">
    <div id="searchIcon" onMouseOver={searchHover}>
    <Image src={search}></Image>
    </div>
    <div id="globe" onMouseOver={globeHover}>
      <Image src={globe}></Image>
    </div>
  </div>

    )
  } 
}

  return (
    <div id="header" className="d-flex align-items-center">
    <div id="logoimg">
      <Link href="/">  
        <Image src={Logo} className="logoImgImg"></Image>
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
    {hoverState}
    </div>
  );
};

export default Header;
