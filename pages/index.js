import Header from "../components/Header";
import IntroContainer from "../components/homepage/IntroContainer";
import ToBeHoast from "../components/homepage/ToBeHoast";
import Kommuner from "../components/homepage/Kommuner";
import Referencer from "../components/homepage/Referencer";
import Faq from "../components/homepage/FAQ";
import NewsLetter from "../components/homepage/NewsLetter";
import Footer from "../components/homepage/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Header></Header>
      <IntroContainer></IntroContainer>
      <div className="homepage-body">
        <ToBeHoast />
        <Kommuner />
        <Referencer />
        <Faq />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
