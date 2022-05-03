
import AboutMeHero from "../components/MainPage/Body/Hero/AboutMeHero";
import Projects from "../components/MainPage/Body/Projects/Projects";
import Slider from "../components/MainPage/Body/Slider/Slider";
import SideNav from "../components/MainPage/Header/Nav/SideNav";
import GetInTouch from "../components/MainPage/Footer/GetInTouch";
import Header from "../components/MainPage/Header/Header";
import Resume from "../components/MainPage/Body/Hero/Resume";



// Default home page. The first page that loads up

const Home = () => {
  return (
    <>
      <Header />
      <AboutMeHero />
      <Resume />
      <Projects />
      {/* <Slider /> */}
      <GetInTouch />
      <SideNav />
    </>
  );
};

export default Home;
