import IntroButton from "../IntroButton";

const IntroContainer = () => {
  return (
    <div
      className="sameSides"
      style={{
        backgroundImage:
          'url("https://i.imgur.com/v7MeGwv_d.webp?maxwidth=760&fidelity=grand")',
        backgroundRepeat: "none",
        backgroundSize: "cover",
      }}
    >
      {" "}
      <div className="sida">sida</div>
      <div className="introContainer">
        <div className="introTextContent d-flex flex-column">
          <div className="introHeader">
            <h1 id="introtext">Erbjud ditt boende till människor på flykt</h1>
          </div>

          <div className="introPara">
            <p>
              Under Samma Tak har som uppdrag att hjälpa privatpersoner att
              kunna erbjuda sitt boende till inkommande flyktingar. Vi samlar
              tydlig och uppdaterad information och samarbetar med kommuner och
              andra aktörer för att säkerställa en trygg upplevelse för båda
              parter.{" "}
            </p>
          </div>

          <IntroButton />
        </div>
      </div>
      <div className="sida">sida</div>
    </div>
  );
};

export default IntroContainer;
