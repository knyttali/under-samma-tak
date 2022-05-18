import Header from "../components/Header";
import IntroContainer from "../components/homepage/IntroContainer";
import ToBeHoast from "../components/homepage/ToBeHoast";
import Kommuner from "../components/homepage/Kommuner";
import Referencer from "../components/homepage/Referencer";
import { useEffect } from "react";
import FAQ from "../components/homepage/FAQ";
import NewsLetter from "../components/homepage/NewsLetter";
import Footer from "../components/homepage/Footer";

export default function Home() {
  // useEffect(()=>{
  //   var logo = document.getElementById("logoimg")
  //   logo.style.backgroundImage="linear-gradient(to bottom right,#489CB7,#004664)"
  // });
  return (
    <div className="homepage">
      <Header></Header>
      <IntroContainer></IntroContainer>
      <div className="homepage-body">
        <ToBeHoast />
        <Kommuner />
        <Referencer />
        <FAQ />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
