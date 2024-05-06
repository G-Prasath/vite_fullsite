import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from 'react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
      setSubMenuOpen(!subMenuOpen);
    };
  
  
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <i className="ri-planet-line"></i> Company
          </a>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose color="#fff" fontSize={20} />
            ) : (
              <RxHamburgerMenu color="#fff" fontSize={20} />
            )}
          </div>
        </div>

        <div
          className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="nav__link">
                About
              </a>
            </li>

            <li className="dropdown__item">
              <div className="nav__link">
                Services{" "}
                <RiArrowDownSLine fontSize={20} onClick={toggleSubMenu} />
              </div>

              <ul className={`dropdown__menu ${subMenuOpen? '' : 'hide-menu'}`}>
                <li>
                  <a href="#" className="dropdown__link">
                    Overview
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    Transactions
                  </a>
                </li>

                <li className="dropdown__subitem">
                  <div className="dropdown__link">Reports</div>

                  {/* <ul className={`dropdown__submenu ${subMenuOpen ? '' : ''}`}>
                    <li>
                      <a href="#" className="dropdown__sublink">
                        Documents
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown__sublink">
                        ayments
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown__sublink">
                        Refunds
                      </a>
                    </li>
                  </ul> */}
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="nav__link">
                Our Gallery
              </a>
            </li>

            <li>
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar