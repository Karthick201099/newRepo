import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

interface props {
  image: string;
  head: string;
  sub: string;
}

const Teamprops = ({ image, head, sub }: props) => {
  return (
    <>
      <div className="sub-9">
        <img src={image} alt="" />
        <div className="content-9">
          <h1>{head}</h1>
          <h3>{sub}</h3>
        </div>
        <div className="icons-9">
          <div className="icon-1">
            <FaInstagram size="13px" color="white" />
          </div>
          <div className="icon-1">
            <FaLinkedinIn size="13px" color="white" />
          </div>
          <div className="icon-1">
            <FaTwitter size="13px" color="white" />
          </div>
          <div className="icon-1">
            <FaFacebookF size="14px" color="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamprops;
