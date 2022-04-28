import style from "./Hero.module.scss";

const AboutMeHero = () => {
  return (
    <section className={style.hero_container}>
      <div className={`${style.big_word} ${style.filter}`}>
        <img src="hello.svg" alt="big word"/>
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
      </div>
      <a
        href="https://drive.google.com/uc?export=download&id=1I3aIIfgPDeDQJ0tKewHa9HixAaDp09Gg"
        aria-label="Resume Download"
        className={style.resume_button}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Check out my Resume!</p>
      </a>
    </section>
  );
};

export default AboutMeHero;
