import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa";

interface props {
  head: number;
  name: string;
}

const Counter = ({ head, name }: props) => {
  return (
    <>
      <div className="sub-5">
        <h1>
          <span>
            <CountUp end={head} duration={3} />
          </span>
          <FaPlus size="25px" />
        </h1>
        <h2>{name}</h2>
      </div>
    </>
  );
};

export default Counter;
