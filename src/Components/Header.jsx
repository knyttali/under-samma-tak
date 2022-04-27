import globe from '../Images/Vector.png'
import logo from '../Images/MenuLogo.png'
import HomePage from '../Pages/HomePage';
import Navbar from '../Components/Navbar'
import searchBlue from '../Images/searchBlue.png' 

const Header = () => {
  return (
    <div id="header" className="d-flex align-items-center">

        <div id="logoDiv">
            <a href={HomePage}>
                <img src={logo}>
                </img>
            </a>
        </div>

        <div>
        <ul className="navbar-nav d-flex flex-row nav-fill w-100 ms-5 me-5">
          <li className="nav-item">

            <a className="nav-link d-flex justify-content-center align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p id="navbar-p">Så fungerar det</p>
            </a>

          </li>

          <li className="nav-item">

            <a className="nav-link d-flex justify-content-center align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p id="navbar-p">Vårt uppdrag</p>
            </a>


          </li>

          <li className="nav-item">

            <a className="nav-link d-flex justify-content-center align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p id="navbar-p">Vanliga frågor</p>
            </a>

          </li>

          <li className="nav-item dropdown">

            <a className="nav-link d-flex justify-content-center align-items-center me-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <p id="navbar-p">Anmäl ditt intresse</p>
            </a>

         </li>
        </ul>
        </div>


        <div id="languageIconDiv" className="d-flex align-items-center">
            <img src={searchBlue} className = "me-5"></img>
            <img src={globe}></img>
        </div>
    </div>
  );
};

export default Header
