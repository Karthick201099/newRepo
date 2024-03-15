import Specialprops from "./Specialprops";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Special = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="container-4">
        <div className="article-4">
          <h5>From Our Menu</h5>
          <h1>Try Our Special Offers</h1>
          <div className="menu">
            <div className="menu-box">
              <a href="" id="hover">
                Diner
              </a>
              <a href="">Launch</a>
              <a href="">Brunch</a>
              <a href="">Dessert</a>
              <a href="">wine</a>
            </div>
            <div className="menu-box1">
              <a href="">View All</a>
            </div>
          </div>
          <div className="main-4">
            <Slider {...settings}>
              <Specialprops
                head={"Chicken Soup"}
                rate={"$231.00 -"}
                link={"Add To Chart"}
                Profile={"src/assets/image/menu-1.webp"}
                strick={"$361.00"}
              />
              <Specialprops
                head={"Oatmeal Chicken"}
                rate={"$195.00 -"}
                link={"Add To Chart"}
                Profile={"src/assets/image/menu-2.webp"}
                strick={"$264.00"}
              />
              <Specialprops
                head={"Pizza Pane"}
                rate={"$95.00 -"}
                link={"Add To Chart"}
                Profile={"src/assets/image/menu-3.webp"}
                strick={"$124.00"}
              />
              <Specialprops
                head={"Vegetable Pasta"}
                rate={"$150.00 -"}
                link={"Add To Chart"}
                Profile={"src/assets/image/menu-4.webp"}
                strick={"$204.00"}
              />
              <Specialprops
                head={"Chicken Soup"}
                rate={"$231.00 -"}
                link={"Add To Chart"}
                Profile={"src/assets/image/menu-1.webp"}
                strick={"$361.00"}
              />
              <Specialprops
                head={"Oatmeal Chicken"}
                rate={"$195.00 -"}
                link={"Add To Chart"}
                Profile={"src/assets/image/menu-2.webp"}
                strick={"$264.00"}
              />
              <Specialprops
                head={"Pizza Pane"}
                rate={"$95.00 -"}
                link={"Add To Chart"}
                Profile={"src/assets/image/menu-3.webp"}
                strick={"$124.00"}
              />
              <Specialprops
                head={"Vegetable Pasta"}
                rate={"$150.00 -"}
                link={"Add To Chart"}
                Profile={"src/assets/image/menu-4.webp"}
                strick={"$204.00"}
              />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Special;
