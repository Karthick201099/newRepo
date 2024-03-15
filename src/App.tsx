import About from "./About/About";
import Banner from "./Banner/Banner";
import Section2 from "./Boxsection/Section2";
import Team from "./Team/Team";
import Blog from "./blog/Blog";
import Counterup from "./counterup/Counterup";
import Feedback from "./feedback/Feedback";
import Footer from "./footer/Footer";
import Locations from "./location/Locations";
import Menu from "./menu/Menu";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./navbar/Nav";
import Reserve from "./reserve/Reserve";
import Special from "./special/Special";

const App = () => (
  <>
    <Nav />
    <Banner />
    <Section2 />
    <About />
    <Special />
    <Counterup />
    <Feedback />
    <Menu />
    <Reserve />
    <Team />
    <Locations />
    <Blog />
    <Footer />
  </>
);

export default App;
