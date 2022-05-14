import IntroButton from "../IntroButton"

function ToBeHoast() {
  return (
    <div className="toBeHoast-container">
        <h6 className="col-2 homepageH6">ATT VARA VÄRDFAMILJ</h6>
        <h2 className="col-6">Du hjälper utifrån dina villkor</h2>
        <div className="col-4 listan">
            <p>1. Anmäl ditt intresse genom att fylla i dina villkor</p>
            <p>2. Få en bekräftelse på att dina uppgifter är sparade</p>
            <p>3. Invänta eventuell återkoppling från din kommun</p>
        </div>
        <button className="btn-primary">Så fungerar det</button>
    </div>
  )
}

export default ToBeHoast