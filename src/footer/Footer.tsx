import "../footer/footer.css";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocation, FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="container-foot">
        <div className="main-foot">
          <div className="sub-foot1">
            <img src={"src/assets/image/logo-1.webp"} alt="" />
            <p>
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form.
            </p>
            <ul>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div className="sub-foot2">
            <h2>Useful Link</h2>
            <ul>
              <li>
                <a href="">
                  <FaArrowRight size="12px" color="burlywood" />{" "}
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaArrowRight size="12px" color="burlywood" />{" "}
                  <span>Latest Blog</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaArrowRight size="12px" color="burlywood" />{" "}
                  <span>Book A Table</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaArrowRight size="12px" color="burlywood" />{" "}
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaArrowRight size="12px" color="burlywood" />{" "}
                  <span>Our Team</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sub-foot3">
            <h2>Opening Hours</h2>
            <ul>
              <li>
                monday <span>08:00 AM – 05:00 PM</span>
              </li>
              <li>
                Thesday <span>09:00 AM – 06:00 PM</span>
              </li>
              <li>
                Wednesday <span id="wed">10:00 AM – 05:00 PM</span>
              </li>
              <li>
                Friday <span id="fri">09:00 AM – 05:00 PM</span>
              </li>
              <li>
                Sat-Sun <span id="sun">Closed</span>
              </li>
            </ul>
          </div>
          <div className="sub-foot4">
            <h2>Get In Touch</h2>
            <div className="box-foot">
              <div className="content-f">
                <div className="i-f">
                  <FaPhoneAlt size="13px" color="white" />
                </div>
                <div className="i-fc">
                  <h4>(800) 216 2020</h4>
                </div>
              </div>
              <div className="content-f">
                <div className="i-f">
                  <FaMessage size="13px" color="white" />
                </div>
                <div className="i-fc">
                  <h4>hello@ruzo.com</h4>
                </div>
              </div>
              <div className="content-f0">
                <div className="i-f0">
                  <FaMapLocation size="13px" color="white" />
                </div>
                <div className="i-fc0">
                  <h4>No. 12, Ribon Building, Walse street, Australia</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-ani1">
          <img src={"src/assets/image/footer-shape-1.webp"} alt="" />
        </div>
        <div className="foot-ani2">
          <img src={"src/assets/image/footer-shape-2.webp"} alt="" />
        </div>
        <div className="foot-ani3">
          <img src={"src/assets/image/footer-shape-3.webp"} alt="" />
        </div>
        <div className="foot-ani4">
          <img src={"src/assets/image/footer-shape-4 (1).webp"} alt="" />
        </div>
        <h2>©Ruzo is Proudly Owned by Hi React</h2>
      </div>
    </>
  );
};

export default Footer;
