import React, {useState} from 'react'
import Header from "../components/Header"
import Footer from "../components/homepage/Footer"
const CommonQuestions = () => {
    var counter = 0
    const[qna, setQna] = useState(
      //HOMEPAGE
        <div className="faq-div">
        <Header />
  
        <div
          style={{
            backgroundImage: 'url("https://i.imgur.com/tTpxOdk.png%22)',
            backgroundRepeat: "none",
            backgroundSize: "cover",
          }}
        >
          <div className="introContainer d-flex align-items-center">
            <div className="our-mission-title">
              <h1>Vanliga frågor</h1>
            </div>
          </div>
        </div>
  
        <div className="faq-row1 row">
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header">
              Kan jag välja att avsluta när jag vill?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
            </p>
            <button onClick={readMoreQ1}>ReadMore</button>
          </div>
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header">
            Är de som kommer försäkrade?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
            </p>
          </div>
          <div className="col-2" />
        </div>
  
        <div className="faq-row2"></div>
        <div className="faq-row3"></div>
        <div className="faq-row4"></div>
        <div className="faq-row5"></div>
        <Footer />
      </div>
    )
    function readMoreQ1(){
      //DETAIL PAGE
        setQna(
            <div className="faq-div">
        <Header />
  
        <div
          style={{
            backgroundImage: 'url("https://i.imgur.com/tTpxOdk.png%22)',
            backgroundRepeat: "none",
            backgroundSize: "cover",
          }}
        >
          <div className="introContainer d-flex align-items-center">
            <div className="our-mission-title">
              <h1>Vanliga frågor</h1>
            </div>
          </div>
        </div>
  
        <div className="faq-row1 row">
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header">
              Kan jag välja att avsluta när jag vill?
            </p>
           
            <button onClick={homePage}>TillBaka</button>
          </div>
          
          </div>
        <div className="faq-row2"></div>
        <div className="faq-row3"></div>
        <div className="faq-row4"></div>
        <div className="faq-row5"></div>
        <Footer />
      </div>
        )
    }

    function homePage(){
      //HOME PAGE
        setQna(
            <div className="faq-div">
        <Header />
  
        <div
          style={{
            backgroundImage: 'url("https://i.imgur.com/tTpxOdk.png%22)',
            backgroundRepeat: "none",
            backgroundSize: "cover",
          }}
        >
          <div className="introContainer d-flex align-items-center">
            <div className="our-mission-title">
              <h1>Vanliga frågor</h1>
            </div>
          </div>
        </div>
  
        <div className="faq-row1 row">
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header">
              Kan jag välja att avsluta när jag vill?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
            </p>
            <button onClick={readMoreQ1}>ReadMore</button>
          </div>
          <div className="col-1" />
          <div className="col-4">
            <p className="faq-row-header">
            Är de som kommer försäkrade?
            </p>
            <p className="faq-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, reprehenderit? Hic optio voluptatem odit? Quia velit
              voluptatem amet commodi optio officia deleniti, culpa provident,
              accusamus voluptatum pariatur asperiores facilis perferendis?
            </p>
          </div>
          <div className="col-2" />
        </div>
  
        <div className="faq-row2"></div>
        <div className="faq-row3"></div>
        <div className="faq-row4"></div>
        <div className="faq-row5"></div>
        <Footer />
      </div>
        )
    }
    
    

  return (
    <div>{qna}</div>
  )
}

export default CommonQuestions