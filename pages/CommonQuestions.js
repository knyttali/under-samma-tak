import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/homepage/Footer";
import Image from "next/image";
import left from "../public/Images/Arrow-left-Blue.png"

const CommonQuestions = () => {
  useEffect(() => {
    var test = document.getElementById("usual-questions");
    test.style.textDecorationThickness = "3px";
    test.style.textDecorationColor = "#489CB7";
    test.style.textUnderlineOffset = "10px";
    test.style.textDecorationLine = "underline";
  });

  var counter = 0;
  const [qna, setQna] = useState(
    //HOMEPAGE
    <div className="faq-div">
      <Header />

      <div
        style={{
          backgroundImage:
            'url("https://i.imgur.com/jWMxJdK_d.webp?maxwidth=760&fidelity=grand")',
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
      >
        <div className="introContainer d-flex align-items-center">
        <div className="col-1"></div>
          <div className="our-mission-title our-mission-title-faq ">
            <h1>Vanliga frågor</h1>
          </div>
        </div>
      </div>

      <div className="faq-row1 row">
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Kan jag välja att avsluta när jag vill?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Är de som kommer försäkrade?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-2" />
      </div>

      <div className="faq-row2 row">
        {" "}
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Vad händer med flyktingarna sen?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Gäller min hemförsäkring?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-2" />
      </div>
      <div className="faq-row3 row">
        {" "}
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Får man ersättning?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Kan man välja vilka som kommer?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-2" />
      </div>
      <div className="faq-row4 row">
        {" "}
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Vem betalar för vad?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Vilka kontroller görs?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-2" />
      </div>
      <div className="faq-row5 row">
        {" "}
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            Får de som kommer annat stöd?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-1" />
        <div className="col-4">
          <p className="faq-row-header" onClick={readMoreQ1}>
            När kommer de?
          </p>
          <p className="faq-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
            voluptatem amet commodi optio officia deleniti, culpa provident,
            accusamus voluptatum pariatur asperiores facilis perferendis?
            <p className="ReadMore" onClick={readMoreQ1}>
              {" "}
              Läs mer
            </p>
          </p>
        </div>
        <div className="col-2" />
      </div>
      <Footer />
    </div>
  );
  function readMoreQ1() {
    //DETAIL PAGE
    setQna(
      <div className="faq-div">
        <Header />

        <div className="cancel-main">
          <div className="back-button-row">
            <div className="col-1"></div>
            <div className="cancel-back-button" onClick={homePage}><Image src={left}/> Tillbaka</div>
          </div>

          <div className="cancel-content-row">

            <div className="col-1"></div>

            <div className="cancel-content col-8">
              <h1>Kan jag välja att avsluta när jag vill?</h1>
              <p>
                I slutet av mars justerades behovet av de tillfälliga boenden
                som kommunerna erbjuder ner från 12 000<br/>
                till 6 000 platser.
                Migrationsverket bedömer att behovet nu har minskat till 2 000
                platser. <br/> <br/>
                – Skälet till att vi minskar beredskapen för de akuta
                tillfälliga boendena är att vi ser att antalet skyddssökande
                ligger kvar på en lägre nivå, samtidigt som vi löpande tecknar
                avtal om platser i mer långsiktiga boendeformer och ökar vår
                kapacitet där, säger Magnus Önnestig, avdelningschef vid
                Migrationsverket.<br/><br/>
                I och med att Migrationsverket går ner till 2
                000 platser minskar också antalet kommuner där myndigheten
                nyttjar dessa tillfälliga boenden.<br/><br/>
                – Målsättningen är att vi
                successivt ska kunna fasa ut den här typen av boende helt och
                hållet, men samtidigt vet vi att läget snabbt kan förändras,
                säger Magnus Önnestig.<br/><br/>
                Det nya beslutet om att minska
                beredskapen av tillfälliga boenden gick under måndagen ut till
                de kommuner som berörs av anpassningen och omfattar tiden fram
                till och med den 29 april. Därefter görs en ny bedömning av
                läget.
              </p>

              <div className="social-share">
                <div className="share-mail share-button"></div>
                <div className="share-fb share-button"></div>
                <div className="share-twtr share-button"></div>
              </div>
            </div>

            <div className="cancel-related col-3">
              <h4 className="cancel-related-header">RELATERAT</h4>
              <p className="cancel-related-p">Är de som kommer försäkrade?</p>
              <p className="cancel-related-p">Kan man välja vilka som kommer?</p>
              <p className="cancel-related-p">Vad händer med flyktingarna sen?</p>
              <p className="cancel-related-p">Vilka kontroller görs?</p>
              <p className="cancel-related-p p-bottom">Gäller min hemförsäkring?</p>
            </div>


          </div>
        </div>

        <Footer />
      </div>
    );
  }


function homePage() {
    //HOME PAGE
    setQna(
      <div className="faq-div">
        <Header />

        <div
          style={{
            backgroundImage:
              'url("https://i.imgur.com/jWMxJdK_d.webp?maxwidth=760&fidelity=grand")',
            backgroundRepeat: "none",
            backgroundSize: "cover",
          }}
        >
          <div className="introContainer d-flex align-items-center">
          <div className="col-1"></div>
          <div className="our-mission-title our-mission-title-faq ">
              <h1>Vanliga frågor</h1>
            </div>
          </div>
        </div>

        <div className="faq-row1 row">
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Kan jag välja att avsluta när jag vill?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Är de som kommer försäkrade?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-2" />
        </div>

        <div className="faq-row2 row">
          {" "}
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Vad händer med flyktingarna sen?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Gäller min hemförsäkring?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-2" />
        </div>
        <div className="faq-row3 row">
          {" "}
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Får man ersättning?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Kan man välja vilka som kommer?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-2" />
        </div>
        <div className="faq-row4 row">
          {" "}
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Vem betalar för vad?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Vilka kontroller görs?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-2" />
        </div>
        <div className="faq-row5 row">
          {" "}
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              Får de som kommer annat stöd?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header" onClick={readMoreQ1}>
              När kommer de?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
              <p className="ReadMore" onClick={readMoreQ1}>
                {" "}
                Läs mer
              </p>
            </p>
          </div>
          <div className="col-2" />
        </div>
        <Footer />
      </div>
    )}

  return <div>{qna}</div>;
};

export default CommonQuestions;
