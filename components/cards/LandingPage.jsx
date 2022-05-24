import React, { Component } from "react";
import Footer from "../homepage/Footer";

export class LandingPage extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.firstStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <div className="main-container row">
          <div className="col-3"></div>
          <form className="length-info form-template col-6" id="landingPage">
            <h1 className="form-header-landing">Intresseanmälan</h1>
            <h5 >
              Här gör du en intresseanmälan för att erbjuda boende till
              människor på flykt. Anmälan är ej bindande utan skickas vidare
              till din kommun för vidare behandling. Därefter kommer din kommun
              att kontakta dig.
            </h5>
            <br />
            <p style={{ fontWeight: "Bold" }}>Så här går det till</p>
            <p>
              1. Du gör en intresseanmälan på den här sidan. <br />
              2. Din intresseanmälan skickas till din kommun. <br />
              3. Din kommun bjuder in dig till en orienterande träff med berörda
              parter. <br />
              4. Du väljer själv om du vill gå vidare i processen och bli en
              värdfamilj.
            </p>

            <br />
            <p style={{ fontWeight: "Bold" }}>OBS! Anmälan är ej bindande.</p>
            <br />
       

            <button className="IntressAnmalan" onClick={this.continue}>
              Gör en intresseanmälan
            </button>
          </form>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default LandingPage;
