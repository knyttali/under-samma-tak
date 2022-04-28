import Image from 'next/image'
import bigFamily from '../public/Images/big-family.png'
import single from '../public/Images/single.png'
import family from '../public/Images/family-round.png'

const StoriesContainer = () => {
  return (
    <div className="stories-div pb-5">
        <h4 className="stories-div-h4">Berättelser</h4>
        
        <div className="three-stories-div d-flex row justify-content-between">

          <div className="col-1"></div>

          <div className="story col-3 d-flex justify-content-center">
            <div className="d-flex justify-content-center">
            <Image className="story-img" src={single} alt="single"/>
            </div>
            <h3 className="story-h3">Lördag i Flen</h3>
            <p className="story-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quisquam.</p>
          </div>



          <div className="story col-3 d-flex justify-content-center">

            <div className="d-flex justify-content-center">
              <Image className="story-img" src={family}alt="family"/>
            </div>

            <h3 className="story-h3">Tisdag i Tumba</h3>
            <p className="story-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem illum iste quibusdam deleniti. Eius. </p>
          </div>


          <div className="story col-3 d-flex justify-content-center">

            <div className="d-flex justify-content-center">
              <Image className="story-img" src={bigFamily} alt="big-family"/>
            </div>

            <h3 className="story-h3">Måndag i Mora</h3>
            <p className="story-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quisquam.</p>
          </div>
          <div className="col-1"></div>

      </div>

        </div>
  )
}

export default StoriesContainer