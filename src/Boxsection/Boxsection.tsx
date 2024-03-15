import "../Boxsection/boxsection.css";
interface Props {
  head: string;
  para: string;
  link: string;
  Profile: string;
}
const Boxsection = ({ head, para, link, Profile }: Props) => {
  return (
    <>
      <div className="sub-2">
        <img src={Profile} alt="" />
        <h3 className="h3">{head}</h3>
        <p className="display-6">{para}</p>
        <a className="link" href="">
          {link}
        </a>
      </div>
    </>
  );
};

export default Boxsection;
