import Image from "next/image";
import VectorDown from "../../public/Images/VectorDown.png";

function NewsLetter() {
  return (
    <div className="sameSides">
    <div className="sida">sida</div>
    <div className="newsLetter">
        <h3>Prenumerera på vårt nyhetsbrev</h3>
        <p>Läs mer om vårt arbete före, under och efter katastrofer.</p>
        <input type="text" placeholder="jane.smith@example.com"/>
        <button>Skicka</button>
        <p>Hantering av personuppgifter <Image src={VectorDown} /></p>
    </div>
    <div className="sida">sida</div>
    </div>
  )
}

export default NewsLetter