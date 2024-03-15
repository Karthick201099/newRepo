import "../feedback/feedback.css";

interface props {
  client: string;
  head: string;
  sub: string;
  para: string;
}
const Feedprops = ({ client, head, sub, para }: props) => {
  return (
    <>
      <div className="sub-6">
        <div className="box-6">
          <div className="content-6">
            <img src={client} alt="" />
          </div>
          <div className="content-6">
            <h2>{head}</h2>
            <p>{sub}</p>
          </div>
        </div>
        <p>{para}</p>
        <div className="img-6">
          <img src={"src/assets/image/testimonials-shape.webp"} alt="" />
        </div>
      </div>
    </>
  );
};

export default Feedprops;
