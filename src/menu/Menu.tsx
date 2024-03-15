// import { useState } from "react";
import "../menu/menu.css";
import Menuprops from "./Menuprops";
import Slider from "react-slick";

const Menu = () => {
  // const [curIndex, setCurindex] = useState(0);

  // const slick = "slick-center";

  const settings = {
    dots: false,
    centerMode: true,
    centerPadding: "320px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // afterChange: (index: number) => {
    //   showContent(index);
    },
  };

  // const showContent = (index: number) => {
  //   setCurindex(index);
  // };

  return (
    <>
      <div className="container-7">
        <h3>Our Portfolio</h3>
        <h1>The Divine Feel Of Taste</h1>
        <div className="main-7">
          <Slider {...settings}>
            <Menuprops
              image={"src/assets/image/portfolio-1.webp"}
              sub={"Bruch"}
              head={"Chicken Dink"}
            />
            <Menuprops
              image={"src/assets/image/portfolio-2.webp"}
              sub={"Wine"}
              head={"Rasberry Cupcake"}
            />
            <Menuprops
              image={"src/assets/image/portfolio-3.webp"}
              sub={"Dessert"}
              head={"Vegetable Cupcake"}
            />
            <Menuprops
              image={"src/assets/image/portfolio-1.webp"}
              sub={"Bruch"}
              head={"Chicken Dink"}
            />
            <Menuprops
              image={"src/assets/image/portfolio-2.webp"}
              sub={"Wine"}
              head={"Rasberry Cupcake"}
            />
            <Menuprops
              image={"src/assets/image/portfolio-3.webp"}
              sub={"Dessert"}
              head={"Vegetable Cupcake"}
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Menu;
