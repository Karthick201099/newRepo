import Counter from "./Counter";
import "../counterup/counter.css";

const Counterup = () => {
  return (
    <>
      <div className="container-5">
        <div className="main-5">
          <Counter head={287} name={"Clients Every Day"} />
          <Counter head={45} name={"Table Available"} />
          <Counter head={70} name={"Breakfast Option"} />
          <Counter head={130} name={"Dinner Option"} />
          <Counter head={25} name={"Year Of Experience"} />
        </div>
      </div>
    </>
  );
};

export default Counterup;
