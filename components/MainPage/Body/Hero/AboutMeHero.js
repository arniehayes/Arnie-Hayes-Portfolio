import style from "./Hero.module.scss";
import Resume from "../Hero/Resume";

const AboutMeHero = () => {
  return (
    <section className={style.hero_container}>
      <div className={`${style.big_word} ${style.filter}`}>
        <img src="hello.svg" alt="big word" />
      </div>
      <div className={style.info_container}>
        <div className={style.text_container}>
          <div className={style.title}>
            <h1>Hi my name is</h1>
          </div>
          <div className={style.name}>
            <h3>Arnie Hayes.</h3>
          </div>
          <div className={style.catchphrase}>
            <h3>I build things for the web.</h3>
          </div>
          <div className={style.about}>
            <p>
              I'm a Front-end Web Developer specializing in building exceptional
              digital experiences.
            </p>
          </div>
        </div>
        {/* <div className={style.hero_img}>
          <img src="hero1.png" alt="hero" />
        </div> */}
        <Resume />
      </div>
    </section>
  );
};

export default AboutMeHero;
