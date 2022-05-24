import IntroButton from "../IntroButton"
import Link from "next/link"
function ToBeHoast() {
  return (
    <div className="sameSides">
        <div className="sida">sida</div>
        <div className="toBeHoastContent">
          <h6 className="homepageH6">ATT VARA VÄRDFAMILJ</h6>
        <h2 className="">Du hjälper utifrån dina villkor</h2>
        <div className="listan">
            <p>1. Anmäl ditt intresse genom att fylla i dina villkor</p>
            <p>2. Få en bekräftelse på att dina uppgifter är sparade</p>
            <p>3. Invänta eventuell återkoppling från din kommun</p>
        </div>
        <Link href={"/HowItWorks"}>
        <button className="btn-primary">Så fungerar det</button>
        </Link>
        </div>
        
        <div className="sida">sida</div>
    </div>
  )
}

export default ToBeHoast