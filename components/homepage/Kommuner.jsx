import Image from "next/image";
import Kommunloggor from "../../public/Images/Kommunloggor.svg";
import sleepingChild from "../../public/Images/sleepingChild.svg";

function Kommuner() {
  return (
    <div className="sameSides">
      <div className="sida">sida</div>

      <div className="kommuner-container">
        <h6 className="homepageH6">SAMARBETANDE KOMMUNER:</h6>
        <div className="kommun-images">
          <div className="kommunloggorna">
            <Image src={Kommunloggor}></Image>
          </div>
          <div className="sleepingChild">
            <Image src={sleepingChild}></Image>
          </div>
        </div>
      </div>

      <div className="sida">sida</div>
    </div>
  );
}

export default Kommuner;
