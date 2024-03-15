import "../Banner/Banner.css";
const Banner = () => {
  return (
    <>
      <div className="container-1">
        <div className="article">
          <div className="main">
            <div className="sub">
              <h3>Welcome To Oer Restaurant</h3>
              <h1>Our Restaurant Offers Delicious & Seafood</h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled item demoralized by the charms
                of pleasure of the moment with a righteous hand, we denounce
                with righteous indignation.
              </p>
              <button>Read More</button>
              <div className="img-1">
                <img src={"src/assets/image/banner-shape-2.webp"} alt="" />
              </div>
              <div className="img-2">
                <img src={"src/assets/image/banner-shape-1.webp"} alt="" />
              </div>
              <div className="img-3">
                <img src={"src/assets/image/banner-shape-4.webp"} alt="" />
              </div>
              <div className="img-4">
                <img src={"src/assets/image/banner-shape-3.webp"} alt="" />
              </div>
            </div>
            <div className="sub-img">
              <img src={"src/assets/image/banner-img-2.webp"} alt="" />
              <div className="img-5">
                <img src={"src/assets/image/banner-shape-5.webp"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
