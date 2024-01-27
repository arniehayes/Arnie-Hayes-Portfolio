
import AboutMeHero from "../components/AboutMeHero";
import Projects from "../components/Projects";
import SideNav from "../components/SideNav";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
import Skills from "../components/Skills";
import WorkHistory from "../components/WorkHistory";



// Default home page. The first page that loads up

const Home = () => {
  return (
    <>
      <Header />
      <AboutMeHero />
      <WorkHistory />
      <Skills />
      <Projects />
      {/* <Slider /> */}
      <GetInTouch />
      <SideNav />
      </>
  );
};

export default Home;
