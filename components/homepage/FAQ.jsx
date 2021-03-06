import Link from "next/link"

function FAQ() {
  return (
    <div className="sameSides">
      <div className="sida">sida</div>
      <div className="FAQ-content">
        <div className="FAQToTheSide homepageH6">
          <h6>VANLIGA FRÅGOR</h6>
          <h2 className="smaller-headline">Alla undrar, vad undrar du?</h2>
        </div>
        <div className="FAQCentered-container">
          <div className="FAQActualQuestions">
            <div className="twoQuestions">
              <div className="question">
                <h4>Kan jag välja att avsluta när jag vill?</h4>
                <p>
                  Consequat tincidunt praesent euismod sit praesent morbi leo
                  sem erat. Vulputate a mauris bibendum eget gravida turpis
                  vulputate eget. Elementum urna quam pharetra ultrices cursus
                  at auctor. Metus viverra augue felis aliquam. Dignissim
                  sodales in posuere et massa arcu augue in.
                </p>
              </div>
              <div className="question">
                <h4>Är de som kommer försäkrade?</h4>
                <p>
                  Consequat tincidunt praesent euismod sit praesent morbi leo
                  sem erat. Vulputate a mauris bibendum eget gravida turpis
                  vulputate eget. Elementum urna quam pharetra ultrices cursus
                  at auctor. Metus viverra augue felis aliquam. Dignissim
                  sodales in posuere et massa arcu augue in.
                </p>
              </div>
            </div>

            <div className="twoQuestions">
              <div className="question">
                <h4>Kan jag välja att avsluta när jag vill?</h4>
                <p>
                  Consequat tincidunt praesent euismod sit praesent morbi leo
                  sem erat. Vulputate a mauris bibendum eget gravida turpis
                  vulputate eget. Elementum urna quam pharetra ultrices cursus
                  at auctor. Metus viverra augue felis aliquam. Dignissim
                  sodales in posuere et massa arcu augue in.
                </p>
              </div>
              <div className="question">
                <h4>Är de som kommer försäkrade?</h4>
                <p>
                  Consequat tincidunt praesent euismod sit praesent morbi leo
                  sem erat. Vulputate a mauris bibendum eget gravida turpis
                  vulputate eget. Elementum urna quam pharetra ultrices cursus
                  at auctor. Metus viverra augue felis aliquam. Dignissim
                  sodales in posuere et massa arcu augue in.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href={"/CommonQuestions"}>
        <button type="button" className="seAllaBtnActualBtn FAQBtn">
          Läs alla vanliga frågor
        </button>
        </Link>
      </div>
      <div className="sida">sida</div>
    </div>
  );
}

export default FAQ;
