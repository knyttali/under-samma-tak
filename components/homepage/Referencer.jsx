import Image from "next/image";
import family1 from "../../public/Images/family (1).svg";
import family2 from "../../public/Images/family (2).svg";
import family3 from "../../public/Images/family (3).svg";
import family4 from "../../public/Images/family (4).svg";

function Referencer() {
  return (
    <div className="referencer-container col-9">
      <h6 className="homepageH6">REFERENSER</h6>
      <h2 className="">Lyssna vad värdfamiljer runt om i Sverige säger</h2>
      <p className="referencer-paragraph">
        Consequat tincidunt praesent euismod sit praesent morbi leo sem erat.
        Vulputate a mauris bibendum eget gravida turpis vulputate eget.
        Elementum urna quam pharetra ultrices cursus at auctor. Metus viverra
        augue felis aliquam. Dignissim sodales in posuere et massa arcu augue
        in.
      </p>
      <div className="referencer-families">
        <div className="referencer-family">
          <Image src={family2}></Image>
          <div className="familyInfo">
            <p className="familyNames">Familjen Hansson</p>
            <p className="familyKommun">Nacka Kommun</p>
          </div>
        </div>
        <div className="referencer-family">
          <Image src={family3}></Image>
          <div className="familyInfo">
            <p className="familyNames">Familjen Hansson</p>
            <p className="familyKommun">Nacka Kommun</p>
          </div>
        </div>
        <div className="referencer-family">
          <Image src={family4}></Image>
          <div className="familyInfo">
            <p className="familyNames">Familjen Hansson</p>
            <p className="familyKommun">Nacka Kommun</p>
          </div>
        </div>
        <div className="referencer-family">
          <Image src={family1}></Image>
          <div className="familyInfo">
            <p className="familyNames">Familjen Hansson</p>
            <p className="familyKommun">Nacka Kommun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referencer;
