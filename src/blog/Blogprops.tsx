interface props {
  image: string;
  sub: string;
  head: string;
  link: string;
  date: string;
}

const Blogprops = ({ image, sub, head, link, date }: props) => {
  return (
    <div className="sub-11">
      <img src={image} alt="" />
      <div className="content-11">
        <h3>{sub}</h3>
        <h2>{head}</h2>
        <a href="">{link}</a>
        <h4>{date}</h4>
      </div>
    </div>
  );
};

export default Blogprops;
