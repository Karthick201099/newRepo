import Boxsection from "./Boxsection";

const Section2 = () => {
  return (
    <>
      <div className="main-2">
        <Boxsection
          head="Fresh Products"
          para="There are many variations of passages of ailable but the majority have saite."
          link="Discover More"
          Profile="src/assets/image/discover-1.webp"
        />
        <Boxsection
          head="Skilled Chefs"
          para="There are many variations of passages of ailable but the majority have saite."
          link="Discover More"
          Profile="src/assets/image/discover-2.webp"
        />
        <Boxsection
          head="Best Bar"
          para="There are many variations of passages of ailable but the majority have saite."
          link="Discover More"
          Profile="src/assets/image/discover-3.webp"
        />
        <Boxsection
          head="Vegan Cuisine"
          para="There are many variations of passages of ailable but the majority have saite."
          link="Discover More"
          Profile="src/assets/image/discover-4.webp"
        />
      </div>
    </>
  );
};

export default Section2;
