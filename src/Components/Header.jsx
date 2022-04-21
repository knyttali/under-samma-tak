import globe from '../Images/Vector.png'
import logo from '../Images/Logo_blue.png'
import HomePage from '../Pages/HomePage';

const Header = () => {
  return (
    <div id="header" className="d-flex align-items-center">

        <div id="logoDiv">
            <a href={HomePage}>
                <img src={logo}>
                </img>
            </a>
        </div>

        <div id="languageIconDiv" className="d-flex align-items-center">
            <img src={globe}></img>
            <p className="language" id="languageText">
                Language
            </p>
        </div>
    </div>
  );
};

export default Header
