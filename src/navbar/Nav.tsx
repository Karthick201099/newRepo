import { FaPlus, FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import "../navbar/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="container">
        <header className="head">
          <img src={"src/assets/image/logo-1.webp"} alt="" />
          <nav className="nav">
            <ul>
              <li>
                <a href="">
                  home
                  <FaPlus size="12px" />
                </a>
              </li>
              <div className="sub-menu">
                <ul>
                  <li>
                    <a href="">Home one</a>
                  </li>
                  <li>
                    <a href="">Home two</a>
                  </li>
                  <li>
                    <a href="">Home three</a>
                  </li>
                </ul>
              </div>
              <li>
                <a href="">
                  page <FaPlus size="12px" />
                </a>
                <div className="sub-menu1">
                  <ul>
                    <li>
                      <a href="">About us</a>
                    </li>
                    <li>
                      <a href="">Booking Table</a>
                    </li>
                    <li>
                      <a href="">Team</a>
                    </li>
                    <li>
                      <a href="">Testmonial</a>
                    </li>
                    <li>
                      <a href="">FAQ's</a>
                    </li>
                    <li>
                      <a href="">Portfolio</a>
                    </li>
                    <li>
                      <a href="">User</a>
                    </li>
                    <li>
                      <a href="">Team & Condition</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Error</a>
                    </li>
                    <li>
                      <a href="">Coming Soon</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">
                  menu <FaPlus size="12px" />
                </a>
                <div className="sub-menu2">
                  <ul>
                    <li>
                      <a href="">Menu</a>
                    </li>
                    <li>
                      <a href="">Menu Detail</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">
                  shop <FaPlus size="12px" />
                </a>
                <div className="sub-menu3">
                  <ul>
                    <li>
                      <a href="">Shop Detail</a>
                    </li>
                    <li>
                      <a href="">Cart</a>
                    </li>
                    <li>
                      <a href="">Checkout</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">
                  blog <FaPlus size="12px" />
                </a>
                <div className="sub-menu4">
                  <ul>
                    <li>
                      <a href="">Blog</a>
                    </li>
                    <li>
                      <a href="">Blog Detail</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">contact us</a>
              </li>
            </ul>
            <div className="search">
              <FaSearch size="20px" color="white" />
            </div>
            <div className="bag">
              <FaBagShopping size="20px" color="white" />
            </div>
            <button>Book A Table</button>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Nav;
