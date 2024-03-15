import { FiArrowRightCircle } from "react-icons/fi";
import "../About/about.css";
const About = () => {
  return (
    <>
      <div className="container-3">
        <div className="article-3">
          <div className="main-3">
            <div className="sub-3">
              <img src={" src/assets/image/about-img-1.webp"} alt="" />
              <div className="img-31">
                <img src={"src/assets/image/about-shape-1.webp"} alt="" />
              </div>
              <div className="img-32">
                <img src={"src/assets/image/about-shape-2.webp"} alt="" />
              </div>
            </div>
            <div className="sub-31">
              <h5>About Us</h5>
              <h1>
                About Us Enjoy An Exceptional Journey Of Taste In Our Restaurant
              </h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are mantis beguiled aitem demora lized by the
                charms of pleasure of the moment.
              </p>
              <div className="main-box3">
                <div className="box-3">
                  <div className="content-3">
                    <img src={" src/assets/image/about-img-3.webp"} alt="" />
                    <h3>Speciallst</h3>
                  </div>
                  <p>
                    bled it to make a type specimen boIt has survived not
                    amnits.
                  </p>
                </div>
                <div className="box-3">
                  <div className="content-3">
                    <img src={" src/assets/image/about-img-4.webp"} alt="" />
                    <h3>Restaurant</h3>
                  </div>
                  <p>
                    bled it to make a type specimen boIt has survived not
                    amnits.
                  </p>
                </div>
              </div>
              <ul>
                <li>
                  <FiArrowRightCircle color="burlywood" />{" "}
                  <span>
                    Mauris mattis lectus eget ligula dapibus, ac maximus ipsum
                    Services.
                  </span>
                </li>
                <li>
                  <FiArrowRightCircle color="burlywood" />{" "}
                  <span>
                    Aenean facilisis erat et metus semper molestie sem posuere
                    tests.
                  </span>
                </li>
              </ul>
              <button>Booking Now</button>
              <div className="img-33">
                <img src={"src/assets/image/about-shape-3.webp"} alt="" />
              </div>
              <div className="img-34">
                <img src={"src/assets/image/about-shape-4.webp"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
