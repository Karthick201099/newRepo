import Blogprops from "./Blogprops";
import "../blog/blog.css";

const Blog = () => {
  return (
    <>
      <div className="container-11">
        <h3>Our Blog</h3>
        <h1>Latest Blog & News</h1>
        <div className="main-11">
          <Blogprops
            image={"src/assets/image/blog-1.webp"}
            sub={"By Admin / Restaurant"}
            head={"Elegant Dessert 10Tips How To Make It At Home"}
            link={"Read More"}
            date={"17 September 2022"}
          />
          <Blogprops
            image={"src/assets/image/blog-2.webp"}
            sub={"By Admin /  News & Tips"}
            head={"Turkish Soup With Species Dish Of The Week"}
            link={"Read More"}
            date={"19 September 2022"}
          />
          <Blogprops
            image={"src/assets/image/blog-3.webp"}
            sub={"By Admin / Food & Drink"}
            head={"Ideal Cocktails From Our Barmen For Perfect Mood"}
            link={"Read More"}
            date={"22 September 2022"}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
