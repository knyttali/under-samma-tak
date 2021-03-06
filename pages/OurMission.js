import React from "react";
import Header from "../components/Header";
import Footer from "../components/homepage/Footer";
import Image from "next/image";
import Kommunloggor from "../public/Images/Kommunloggor.svg";
import { useEffect } from "react";

export default function OurMission() {
  useEffect(() => {
    var test = document.getElementById("our-mission");
    test.style.textDecorationThickness = "3px";
    test.style.textDecorationColor = "#489CB7";
    test.style.textUnderlineOffset = "10px";
    test.style.textDecorationLine = "underline";
  });

  return (
    <div className="our-mission">
      <Header />
      <div
        style={{
          backgroundImage: 'url("https://i.imgur.com/tTpxOdk.png")',
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
      >
        <div className="introContainer d-flex align-items-center">
          <div className="col-1"></div>
          <div className="our-mission-title">
            <h1>Vårt uppdrag</h1>
          </div>
        </div>
      </div>

      <div className="row our-mission-content">
        <div className="col-1" />

        <div className="col-8 ingressen">
          <h4>
            Under Samma Tak har som uppdrag att hjälpa privatpersoner att kunna
            erbjuda sitt boende till inkommande flyktingar. Vi samlar tydlig och
            uppdaterad information och samarbetar med kommuner och andra aktörer
            för att säkerställa en trygg upplevelse för båda parter. har som
            uppdrag att hjälpa privatpersoner att kunna erbjuda sitt boende till
            inkommande flyktingar. Vi samlar{" "}
          </h4>{" "}
          <br />
          <h2 className="our-mission-h2">Om oss</h2>
          <p>
            Vi grundades har som uppdrag att hjälpa privatpersoner att kunna
            erbjuda sitt boende till inkommande flyktingar. Vi samlar tydlig och
            uppdaterad information och samarbetar med kommuner och andra aktörer
            för att säkerställa en trygg upplevelse för båda parter. har som
            uppdrag att hjälpa privatpersoner att kunna erbjuda sitt boende till
            inkommande flyktingar. Vi samlar tydlig och uppdaterad information
            och samarbetar med kommuner och andra aktörer för att säkerställa en
            trygg upplevelse för båda parter. har som uppdrag att hjälpa
            privatpersoner att kunna erbjuda sitt boende till inkommande
            flyktingar. Vi samlar tydlig och uppdaterad information och
            samarbetar med kommuner och andra aktörer för att säkerställa en
            trygg upplevelse för båda parter. har som uppdrag att hjälpa
            privatpersoner att kunna erbjuda sitt boende till för att
            säkerställa en trygg upplevelse för båda parter. har som uppdrag att
            hjälpa privatpersoner att kunna erbjuda sitt boende till inkommande
            flyktingar. Vi samlar tydlig och uppdaterad information och
            samarbetar med kommuner och andra aktörer för att säkerställa en
            trygg upplevelse för båda parter. har som uppdrag att hjälpa
            privatpersoner att kunna erbjuda sitt boende till inkommande
          </p>{" "}
          <br />
          <h2 className="our-mission-h2">Vår vision</h2>
          <p>
            Under Samma Tak har som uppdrag att hjälpa privatpersoner att kunna
            erbjuda sitt boende till inkommande flyktingar. Vi samlar tydlig och
            uppdaterad information och samarbetar med kommuner och andra aktörer
            för att säkerställa en trygg upplevelse för båda parter. har som
            uppdrag att hjälpa privatpersoner att kunna erbjuda sitt boende till
            inkommande flyktingar. Vi samlar tydlig och uppdaterad information
            och samarbetar med kommuner och andra aktörer för att säkerställa en
            trygg upplevelse för båda parter. har som uppdrag att hjälpa
            privatpersoner att kunna erbjuda sitt boende till inkommande
          </p>{" "}
          <br />
          <h2 className="our-mission-h2">Vårat sammarbete med kommuner</h2>
          <p>
            Under Samma Tak har som uppdrag att hjälpa privatpersoner att kunna
            erbjuda sitt boende till inkommande flyktingar. Vi samlar tydlig och
            uppdaterad information och samarbetar med kommuner och andra aktörer
            för att säkerställa en trygg upplevelse för båda parter. har som
            uppdrag att hjälpa privatpersoner att kunna erbjuda sitt boende till
            inkommande flyktingar. Vi samlar tydlig och uppdaterad information
            och samarbetar med kommuner och andra aktörer för att säkerställa en
            trygg upplevelse för båda parter. har som uppdrag att hjälpa
            privatpersoner att kunna erbjuda sitt boende till inkommande
            flyktingar. Vi samlar tydlig och uppdaterad information och
            samarbetar med kommuner och andra aktörer för att säkerställa en
            trygg upplevelse för båda parter. har som uppdrag att hjälpa
            privatpersoner att kunna erbjuda sitt boende till
          </p>
          <div className="kommunlogga">
            <Image src={Kommunloggor}></Image>
          </div>
        </div>

        <div className="col-3" />
      </div>
      <Footer></Footer>
    </div>
  );
}
