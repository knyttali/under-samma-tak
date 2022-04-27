import chevron from '../Images/chevron_dropdown_menu.png'
import searchBlue from '../Images/searchBlue.png'
import { Link } from "react-router-dom"


const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid p-0 ">

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse hide" id="navbarWithDropdown">

        <ul className="navbar-nav nav-fill w-100 ms-5 me-5">
          <li className="nav-item dropdown">

            <a className="nav-link d-flex justify-content-center align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p id="navbar-p">Så fungerar det</p>
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">

            <a className="nav-link d-flex justify-content-center align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p id="navbar-p">Vårt uppdrag</p>
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">

            <a className="nav-link d-flex justify-content-center align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p id="navbar-p">Vanliga frågor</p>
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>


          <li className="nav-item dropdown">

            <a className="nav-link me-5 d-flex justify-content-center align-items-center me-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p id="navbar-p">Anmäl ditt intresse</p>
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="d-flex align-items-center">
          <img src={searchBlue} id="dropdownImg" alt=""></img>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar