import { FaPlus } from "react-icons/fa";

interface props {
  image: string;
  sub: string;
  head: string;
}
const Menuprops = ({ image, sub, head }: props) => {
  const isActive = true;
  return (
    <>
      <div className="sub-7">
        <img src={image} alt="" />

        {isActive && (
          <div className={`content-7 `}>
            <h4>{sub}</h4>
            <h1>{head}</h1>
            <div className="icons-7">
              <FaPlus color="white" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menuprops;
