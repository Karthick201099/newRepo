import { FaCheck } from "react-icons/fa";
import "../location/locations.css";
import { FaLocationDot } from "react-icons/fa6";

const Locations = () => {
  return (
    <>
      <div className="container-10">
        <div className="main-10">
          <div className="sub-10">
            <h4>Find Our Location</h4>
            <h1>Locations Of Our Restaurant All Over The World</h1>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are mantis beguiled aitem demora lized by the
              charms of pleasure of the moment.
            </p>
            <h3>Where Buy Our Restaurant</h3>
            <div className="box-10">
              <div className="content-10">
                <p>
                  <FaCheck size="16px" color="burlywood" />{" "}
                  <span>Dummy voluptatem</span>
                </p>
                <p>
                  <FaCheck size="16px" color="burlywood" />
                  <span> Accusantium</span>
                </p>
              </div>
              <div className="content-10">
                <p>
                  <FaCheck size="16px" color="burlywood" />{" "}
                  <span>Typesetting</span>
                </p>
                <p>
                  <FaCheck size="16px" color="burlywood" />{" "}
                  <span>Popular belief</span>
                </p>
              </div>
              <div className="content-10">
                <p>
                  <FaCheck size="16px" color="burlywood" />{" "}
                  <span>Established</span>
                </p>
                <p>
                  <FaCheck size="16px" color="burlywood" />{" "}
                  <span>Many variations</span>
                </p>
              </div>
            </div>
            <a href="">Read More</a>
          </div>
          <div className="sub-101">
            <img src={"src/assets/image/location-map-img.webp"} alt="" />

            <div className="img-10">
              <div className="img-i1">
                <FaLocationDot color="burlywood" />
              </div>
              <div className="img-i2">
                <FaLocationDot color="burlywood" />
              </div>
              <div className="img-i3">
                <FaLocationDot color="burlywood" />
              </div>
              <div className="img-i4">
                <FaLocationDot color="burlywood" />
              </div>
              <div className="img-i5">
                <FaLocationDot color="burlywood" />
              </div>
              <div className="img-i6">
                <FaLocationDot color="burlywood" />
              </div>
              <div className="img-i7">
                <FaLocationDot color="burlywood" />
              </div>
              <div className="img-i8">
                <FaLocationDot color="burlywood" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
