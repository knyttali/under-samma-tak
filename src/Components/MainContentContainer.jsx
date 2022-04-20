import rightArrow from '../Images/Right.png'
import paper from '../Images/paper.png'
import train from '../Images/boardingTrain.png'

const MainContentContainer = () => {
  return (
    <div className="d-flex justify-content-evenly row" id="mainContent">

    <div className="content-div-left content-div d-flex col-5" id="contentSim">

      <div id="bild1"  className = "content-img">
        <img src={train} alt="boardingTrain" />
      </div>

      <div id="textcontent1">
        <h4 id="contentdiv-h4">Se hur det skulle se ut i er familj</h4>
      </div>
      
      <div id="textcontent1">
        <p className="content-div-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          sed architecto libero!
        </p>
      </div>

      <div className="mainContentButton" id="buttonqa">
        <a className="d-flex align-items-center w-100" href="#" role="button">
          <img src={rightArrow} className="rightArrow" alt="buttonqa" />
         <p className="contentButtonPara">Testa vår simulator</p>  
        </a>
      </div>

    </div>


    <div className="content-div-right content-div d-flex col-5" id="contentQA">

      <div id="bild1"  className = "content-img">
        <img src={paper} alt="paper" />
      </div>

      <div id="textcontent1">
        <h4 id ="contentdiv-h4">Vanliga frågor</h4>
      </div>
      
      <div id="textcontent1">
        <p className ="content-div-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          sed architecto libero!
        </p>
      </div>

      <div className="mainContentButton" id="buttonqa">
        <a className="d-flex align-items-center w-100" href="#" role="button">
          <img src={rightArrow} className="rightArrow" alt="buttonqa" />
         <p className="contentButtonPara">Vanliga frågor och svar</p>  
        </a>
      </div>

    </div>

    </div>
  )
}

export default MainContentContainer