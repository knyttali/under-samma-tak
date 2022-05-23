import React from "react";
import Header from "../components/Header";
import Footer from "../components/homepage/Footer";
import Image from "next/image";
import eMail from "../public/Images/Email.png";
import draw from "../public/Images/Draw.png";
import checkCircle from "../public/Images/CheckCircle.png";
import { useEffect } from "react";
import IntroButton from "../components/IntroButton";

export default function OurMission() {
  useEffect(() => {
    var test = document.getElementById("how-it-works");
    test.style.textDecorationThickness = "3px";
    test.style.textDecorationColor = "#489CB7";
    test.style.textUnderlineOffset = "10px";
    test.style.textDecorationLine = "underline";
  });

  return (
    <div className="how-it-works">
      <Header />
      <div
        style={{
          backgroundImage: 'url("https://i.imgur.com/tTpxOdk.png")',
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
      >
        <div className="introContainer d-flex align-items-center">
          <div className="our-mission-title">
            <h1>Så fungerar det</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-1" />

        <div className="col-8 how-it-works-content">
          <h2 className="how-it-works-h2">
            Så här fungerar det att erbjuda sitt boende till en människa i nöd
          </h2>
          <h4 className="how-it-works-h4">
            Under Samma Tak har som uppdrag att hjälpa privatpersoner att kunna
            erbjuda sitt boende till inkommande flyktingar. Vi samlar tydlig och
            uppdaterad information och samarbetar med kommuner och andra aktörer
            för att säkerställa en trygg upplevelse för båda partner.{" "}
          </h4>{" "}
          <br />
          <div className="stegen">
            <p className="steg">STEG 1</p>
            <div className="how-it-works-img">
              <Image src={draw}></Image>{" "}
            </div>
            <h3 className="how-it-works-h3">Du ansöker</h3>
            <p className="how-it-works-text">
              Ullamcorper eu sit sit blandit dui metus sollicitudin eu. Libero
              magna ut est ultricies nisl. Netus proin quam ipsum habitasse elit
              nunc suspendisse non. Magnis quam donec imperdiet lectus nascetur
              ut ipsum. Ullamcorper eu sit sit blandit dui metus sollicitudin
              eu. Libero magna ut est ultricies nisl. Netus proin quam ipsum
              habitasse elit nunc suspendisse non. Magnis quam donec imperdiet
              lectus nascetur ut ipsum. Ullamcorper eu sit sit blandit dui metus
              sollicitudin eu. Libero magna ut est ultricies nisl. Netus proin
              quam ipsum habitasse elit nunc suspendisse non. Magnis quam donec
              imperdiet lectus nascetur ut ipsum.
            </p>{" "}
            <br />
            <p className="steg">STEG 2</p>
            <div className="how-it-works-img">
              <Image src={checkCircle}></Image>{" "}
            </div>
            <h3 className="how-it-works-h3">Vi säkerhetsställer</h3>
            <p className="how-it-works-text">
              Facilisis suscipit hendrerit interdum a. Rhoncus pulvinar in
              imperdiet dictum eget platea. Metus, tellus elementum enim
              sagittis, a, arcu, molestie. Turpis quis in tincidunt id malesuada
              posuere. Sit felis amet amet at eu, urna facilisi. Ut etiam metus,
              donec feugiat consequat purus nulla. Mus tempor varius et et
              egestas tellus. Facilisis suscipit hendrerit interdum a. Rhoncus
              pulvinar in imperdiet dictum eget platea. Metus, tellus elementum
              enim sagittis, a, arcu, molestie. Turpis quis in tincidunt id
              malesuada posuere. Sit felis amet amet at eu, urna facilisi. Ut
              etiam metus, donec feugiat consequat purus nulla. Mus tempor
              varius et et egestas tellus. Facilisis suscipit hendrerit interdum
              a. Rhoncus pulvinar in imperdiet dictum eget platea. Metus, tellus
              elementum enim sagittis, a, arcu, molestie. Turpis quis in
              tincidunt id malesuada posuere. Sit felis amet amet at eu, urna
              facilisi.
            </p>{" "}
            <br />
            <p className="steg">STEG 3</p>
            <div className="how-it-works-img">
              <Image src={eMail}></Image>{" "}
            </div>
            <h3 className="how-it-works-h3">Kommunen kontaktar dig</h3>
            <p className="how-it-works-text">
              Praesent sem justo, vitae ut accumsan nunc. Est aliquam nibh amet
              pellentesque id nunc. Mauris dui tincidunt gravida interdum duis
              tempor ultrices. In facilisis ut diam, volutpat, tellus, consequat
              ac orci. Magna non quisque molestie justo sagittis quis tristique
              sollicitudin sem. Elit amet, commodo donec est diam. Dignissim
              viverra pharetra tincidunt ultrices ullamcorper non pellentesque
              elementum. Magnis libero lacus, ut eu praesent amet, at morbi et.
              Tristique semper ut pretium facilisi volutpat nulla in tortor,
              bibendum. Felis scelerisque aliquet eu volutpat, eget vitae ut
              eget hendrerit. Pulvinar lacus enim, est congue. Neque, sed
              aliquet aliquam et non. Elit placerat urna euismod consectetur
              pharetra.
            </p>
            <div className="how-it-works-btn">
              <IntroButton />
            </div>
          </div>
        </div>

        <div className="col-3" />
      </div>
      <Footer></Footer>
    </div>
  );
}
