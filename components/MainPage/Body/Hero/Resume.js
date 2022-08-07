import style from "./Resume.module.scss";
import { motion } from "framer-motion";

const Resume = () => {
    return (
      <section className={style.resume_section}>
        <div className={style.resume_button_container} id="resume">
          <motion.a
            href="https://drive.google.com/file/d/1SDfobPOnSNI5nIi9QcLrfRVrMUhekc0P/view?usp=sharing"
            aria-label="Resume Download"
            target="_blank"
            rel="noopener noreferrer"
            className={style.resume_button}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <p>Check out my Resume!</p>
          </motion.a>
        </div>
      </section>
    );
};

export default Resume;
