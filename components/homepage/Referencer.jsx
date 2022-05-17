import Image from "next/image";
import family1 from "../../public/Images/family (1).svg";
import family2 from "../../public/Images/family (2).svg";
import family3 from "../../public/Images/family (3).svg";
import family4 from "../../public/Images/family (4).svg";

function Referencer() {
  return (
    <div>
      <div className="sameSides">
        <div className="sida">sida</div>
        <div className="referencer-container">
          <div className="referencer-text">
            <h6 className="homepageH6">REFERENSER</h6>
            <h2 className="smaller-headline">
              Lyssna vad värdfamiljer 
              <br />runt om i Sverige säger
            </h2>
            <p className="referencer-paragraph">
              Consequat tincidunt praesent euismod sit praesent morbi leo sem
              erat. Vulputate a mauris bibendum eget gravida turpis vulputate
              eget. Elementum urna quam pharetra ultrices cursus at auctor.
              Metus viverra augue felis aliquam. Dignissim sodales in posuere et
              massa arcu augue in.
            </p>
          </div>

          <div className="referencer-families">
            <div className="referencer-family">
              <Image src={family2} style={{ width: "100%" }}></Image>
              <div className="familyInfo">
                <p className="familyNames">Familjen Hansson</p>
                <p className="familyKommun">Nacka kommun</p>
              </div>
            </div>
            <div className="referencer-family">
              <Image src={family3}></Image>
              <div className="familyInfo">
                <p className="familyNames">Familjen Widell</p>
                <p className="familyKommun">Danderyds kommun</p>
              </div>
            </div>
            <div className="referencer-family">
              <Image src={family4}></Image>
              <div className="familyInfo">
                <p className="familyNames">Lena och Per</p>
                <p className="familyKommun">Ludvika kommun</p>
              </div>
            </div>
            <div className="referencer-family">
              <Image src={family1}></Image>
              <div className="familyInfo">
                <p className="familyNames">Omar Yasofi</p>
                <p className="familyKommun">Kristinehamns kommun</p>
              </div>
            </div>
          </div>
          <div className="seAllaBtn">
            <button type="button" className="seAllaBtnActualBtn">
              Se alla
            </button>
          </div>
        </div>
        <div className="sida">sida</div>
      </div>
    </div>
  );
}

export default Referencer;
