import { FaCaretRight } from "react-icons/fa";
import Feedprops from "./Feedprops";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="container-6">
        <div className="main-6">
          <div className="sub-box6">
            <div className="test-6">
              <h3>Our Testimonials</h3>
              <h1>Our Client Feedback</h1>
            </div>
            <div className="main-box6">
              <Slider {...settings}>
                <Feedprops
                  client={"src/assets/image/testimonials-2.webp"}
                  head={"Donatella Nobatti"}
                  sub={"SEO-Founder"}
                  para={
                    "There are many variations of passages of Lorem ipsum available atims thajority have suffered alteration in some form by injected randomised words which don't look even sligh going to use a passage."
                  }
                />
                <Feedprops
                  client={"src/assets/image/testimonials-2.webp"}
                  head={"Donatella Nobatti"}
                  sub={"SEO-Founder"}
                  para={
                    "There are many variations of passages of Lorem ipsum available atims thajority have suffered alteration in some form by injected randomised words which don't look even sligh going to use a passage."
                  }
                />
                <Feedprops
                  client={"src/assets/image/testimonials-2.webp"}
                  head={"Donatella Nobatti"}
                  sub={"SEO-Founder"}
                  para={
                    "There are many variations of passages of Lorem ipsum available atims thajority have suffered alteration in some form by injected randomised words which don't look even sligh going to use a passage."
                  }
                />
              </Slider>
            </div>
          </div>

          <div className="sub-box61">
            <img src={"src/assets/image/testimonials-img-1.webp"} alt="" />

            <div className="img-i6">
              <FaCaretRight size="55px" color="burlywood" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
