import style from "./Hero.module.scss";
import Resume from "../Hero/Resume";
import { motion } from "framer-motion";


const AboutMeHero = () => {
  return (
    <section className={style.hero_container}>
      <motion.div
        className={`${style.big_word} ${style.filter}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 1.5, delay: .3 }}
        viewport={{ once: true }}
      >
        <img src="hello.svg" alt="big word" />
      </motion.div>
      <div className={style.info_container}>
        <div className={style.text_container}>
          <motion.div
            className={style.title}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: .7}}
            viewport={{ once: true }}
          >
            <h1>Hi my name is</h1>
          </motion.div>
          <motion.div
            className={style.name}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: .9}}
            viewport={{ once: true }}
          >
            <h3>Arnie Hayes.</h3>
          </motion.div>
          <motion.div
            className={style.catchphrase}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <h3>I build experiences for the web.</h3>
          </motion.div>
          <motion.div
            className={style.about}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 1.3}}
            viewport={{ once: true }}
          >
            <p>
              I'm a Front-end Web Developer specializing in building exceptional
              digital experiences.
            </p>
          </motion.div>
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
