import Image from "next/image";
import globe from "../public/Images/Globe.png";
import Link from "next/dist/client/link";
import Logo from "../public/Images/Logo.svg";
import search from "../public/Images/Search.svg";
import React, { useState} from "react";
import hoverGlobe from "../public/Images/globehover.svg";
import hoverSearch from "../public/Images/SearchHover.svg";
import searchWhite from "../public/Images/Vector.svg";
import close from "../public/Images/Close.svg";

const Header = () => {
  const [hoverState, setState] = useState(
    <div id="header" className="d-flex align-items-center">
      <div id="logoimg">
        <Link href="/">
          <Image src={Logo} className="logoImgImg"></Image>
        </Link>
      </div>

      <div className="menuItems justify-content-between d-flex">
        <Link href="/">
          <a>
            <p className="how-it-works">Så fungerar det</p>
          </a>
        </Link>
        <Link href="/">
          <a>
            <p id="our-mission">Vårt uppdrag</p>
          </a>
        </Link>
        <Link href="/">
          <a>
            <p id="usual-questions">Vanliga frågor</p>
          </a>
        </Link>
        <Link href="/FormPage">
          <a>
            <p id="show-intrest">Anmäl ditt intresse</p>
          </a>
        </Link>
      </div>

      <div id="languageIconDiv" className="d-flex align-items-center">
        <div id="searchIcon">
          <Image src={search} onMouseOver={searchHover}></Image>
        </div>
        <div id="globe" onMouseOver={globeHover}>
          <Image src={globe}></Image>
        </div>
      </div>
    </div>
  );

  function globeHover() {
    setState(
      <div id="header" className="d-flex align-items-center">
        <div id="logoimg">
          <Link href="/">
            <Image src={Logo} className="logoImgImg"></Image>
          </Link>
        </div>

        <div className="menuItems justify-content-between d-flex">
          <Link href="/">
            <a>
              <p className="how-it-works">Så fungerar det</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p id="our-mission">Vårt uppdrag</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p id="usual-questions">Vanliga frågor</p>
            </a>
          </Link>
          <Link href="/FormPage">
            <a>
              <p id="show-intrest">Anmäl ditt intresse</p>
            </a>
          </Link>
        </div>

        <div id="languageIconDiv" className="d-flex align-items-center">
          <div id="searchIcon">
            <Image src={search}></Image>
          </div>
          <div id="globe" className="direction" onMouseLeave={globeNormal}>
            <Image src={hoverGlobe}></Image>
            <div className="languageList">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  English
                </li>
                <li className="list-group-item list-group-item-action">
                  Spanish
                </li>
                <li className="list-group-item list-group-item-action">
                  Ukrainian
                </li>
                <li className="list-group-item list-group-item-action">
                  Russian
                </li>
                <li className="list-group-item list-group-item-action">
                  German
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
    function globeNormal() {
      setState(
        <div id="header" className="d-flex align-items-center">
          <div id="logoimg">
            <Link href="/">
              <Image src={Logo} className="logoImgImg"></Image>
            </Link>
          </div>

          <div className="menuItems justify-content-between d-flex">
            <Link href="/">
              <a>
                <p className="how-it-works">Så fungerar det</p>
              </a>
            </Link>
            <Link href="/">
              <a>
                <p id="our-mission">Vårt uppdrag</p>
              </a>
            </Link>
            <Link href="/">
              <a>
                <p id="usual-questions">Vanliga frågor</p>
              </a>
            </Link>
            <Link href="/FormPage">
              <a>
                <p id="show-intrest">Anmäl ditt intresse</p>
              </a>
            </Link>
          </div>

          <div id="languageIconDiv" className="d-flex align-items-center">
            <div id="searchIcon" onMouseOver={searchHover}>
              <Image src={search}></Image>
            </div>
            <div id="globe" onMouseOver={globeHover}>
              <Image src={globe}></Image>
            </div>
          </div>
        </div>
      );
    }
  }
  function searchHover() {
    setState(
      <div id="header" className="d-flex align-items-center">
        <div id="logoimg">
          <Link href="/">
            <Image src={Logo} className="logoImgImg"></Image>
          </Link>
        </div>

        <div className="menuItems justify-content-between d-flex">
          <Link href="/">
            <a>
              <p className="how-it-works">Så fungerar det</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p id="our-mission">Vårt uppdrag</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p id="usual-questions">Vanliga frågor</p>
            </a>
          </Link>
          <Link href="/FormPage">
            <a>
              <p id="show-intrest">Anmäl ditt intresse</p>
            </a>
          </Link>
        </div>

        <div id="languageIconDiv" className="d-flex align-items-center">
          <div id="searchIcon" onMouseLeave={searchNormal}>
            <Image src={hoverSearch} onClick={searchClick}></Image>
          </div>
          <div id="globe">
            <Image src={globe}></Image>
          </div>
        </div>
      </div>
    );
    function searchNormal() {
      setState(
        <div id="header" className="d-flex align-items-center">
          <div id="logoimg">
            <Link href="/">
              <Image src={Logo} className="logoImgImg"></Image>
            </Link>
          </div>

          <div className="menuItems justify-content-between d-flex">
            <Link href="/">
              <a>
                <p className="how-it-works">Så fungerar det</p>
              </a>
            </Link>
            <Link href="/">
              <a>
                <p id="our-mission">Vårt uppdrag</p>
              </a>
            </Link>
            <Link href="/">
              <a>
                <p id="usual-questions">Vanliga frågor</p>
              </a>
            </Link>
            <Link href="/FormPage">
              <a>
                <p id="show-intrest">Anmäl ditt intresse</p>
              </a>
            </Link>
          </div>
          <div id="languageIconDiv" className="d-flex align-items-center">
            <div id="searchIcon" onMouseOver={searchHover}>
              <Image src={search}></Image>
            </div>
            <div id="globe" onMouseOver={globeHover}>
              <Image src={globe}></Image>
            </div>
          </div>
        </div>
      );
    }
  }
  function searchClick() {
    header;
    setState(
      <div className="searchbar d-flex align-items-center">
        <Image src={searchWhite}></Image>
        <input type="text" id="searchfield" placeholder="Sök">
        </input>
        <Image src={close} onClick={searchHover}></Image>
      </div>
    );
  }

  return hoverState;
};

export default Header;