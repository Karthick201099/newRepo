import "../special/Special.css";

interface Props {
  head: string;
  rate: string;
  link: string;
  Profile: string;
  strick: string;
}

const Specialprops = ({ head, rate, link, Profile, strick }: Props) => {
  return (
    <>
      <div id="container">
        <div className="sub-4">
          <img src={Profile} alt="" />
          <div className="box-4">
            <h2>{head}</h2>
            <h3>
              {rate}
              <span>{strick}</span>
            </h3>
          </div>
          <a href="">{link}</a>
        </div>
      </div>
    </>
  );
};

export default Specialprops;
