import Teamprops from "./Teamprops";
import "../Team/team.css";
import Slider from "react-slick";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="container-9">
        <div className="img-ani">
          <img src={"src/assets/image/restaurant-img-shape-1.webp"} alt="" />
        </div>
        <div className="img-anil-1">
          <img src={"src/assets/image/restaurant-img-shape-2.webp"} alt="" />
        </div>
        <div className="main-9">
          <div className="sub-content9">
            <h3>Team of Restaurant</h3>
            <div className="inline-f">
              <h1>Meet Our Professionals</h1>
              <a href="">View All</a>
            </div>
          </div>

          <Slider {...settings}>
            <Teamprops
              image={"src/assets/image/restaurant-img-1.webp"}
              head={"Mary Christmas"}
              sub={"Assistente Chef"}
            />
            <Teamprops
              image={"src/assets/image/restaurant-img-2.webp"}
              head={"Sharon Needles"}
              sub={"Co-Founder"}
            />
            <Teamprops
              image={"src/assets/image/restaurant-img-3.webp"}
              head={"Ash wednesday"}
              sub={"Chef"}
            />
            <Teamprops
              image={"src/assets/image/restaurant-img-1.webp"}
              head={"Mary Christmas"}
              sub={"Assistente Chef"}
            />
            <Teamprops
              image={"src/assets/image/restaurant-img-2.webp"}
              head={"Sharon Needles"}
              sub={"Co-Founder"}
            />
            <Teamprops
              image={"src/assets/image/restaurant-img-3.webp"}
              head={"Ash wednesday"}
              sub={"Chef"}
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Team;
