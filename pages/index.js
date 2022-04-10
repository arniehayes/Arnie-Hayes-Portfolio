import Header from "../components/Header/Header";
import AboutMeHero from "../components/Body/Hero/AboutMeHero";
import Projects from "../components/Body/Projects/Projects";
import SideNav from "../components/Header/Nav/SideNav";
import GetInTouch from "../components/Footer/GetInTouch";

// Default home page. The first page that loads up

const Home = () => {
  return (
    <>
      <Header />
      <AboutMeHero />
      <Projects />
      <GetInTouch />
      <SideNav />
    </>
  );
};

export default Home;
