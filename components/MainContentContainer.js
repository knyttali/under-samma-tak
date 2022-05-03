import Image from "next/image"
import rightArrow from '../public/Images/Right.png'
import paper from '../public/Images/paper.svg'
import train from '../public/Images/boardingTrain.svg'
import test from '../public/Images/family.png'


const MainContentContainer = () => {
  return (
    <div className="d-flex justify-content-evenly row" id="mainContent">

    <div className="content-div-left content-div d-flex col-5" id="contentSim">

      <div id="bild1"  className = "content-img" >  
        <Image src={train} alt="boardingTrain" />
      </div>

      <div className="textcontent1">
        <h4 id="contentdiv-h4">Se hur det skulle se ut i er familj</h4>
      </div>
      
      <div className="textcontent1">
        <p className="content-div-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          sed architecto libero!
        </p>
      </div>

      <div className="mainContentButton" id="buttonqa">
        <a className="d-flex align-items-center w-100" href="#" role="button">
          <Image src={rightArrow} className="rightArrow" alt="buttonqa" />
         <p className="contentButtonPara">Testa vår simulator</p>  
        </a>
      </div>

    </div>


    <div className="content-div-right content-div d-flex col-5" id="contentQA">

      <div id="bild2"  className = "content-img">
        <Image src={paper} alt="paper" />
      </div>

      <div className="textcontent1">
        <h4 id ="contentdiv-h4">Vanliga frågor</h4>
      </div>
      
      <div className="textcontent1">
        <p className ="content-div-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          sed architecto libero!
        </p>
      </div>

      <div className="mainContentButton rightButtonSticky" id="buttonqa">
        <a className="d-flex align-items-center w-100" href="#" role="button">
          <Image src={rightArrow} className="rightArrow" alt="buttonqa" />
         <p className="contentButtonPara">Vanliga frågor och svar</p>  
        </a>
      </div>

    </div>

    </div>
  )
}

export default MainContentContainer