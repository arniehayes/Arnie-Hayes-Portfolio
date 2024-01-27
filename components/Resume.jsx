import style from "../styles/Resume.module.scss";
import { motion } from "framer-motion";

const Resume = () => {
    return (
      <section className={style.resume_section}>
        <div className={style.resume_button_container} id="resume">
          <motion.a
            href="https://drive.google.com/file/d/1M7_DbDp4q9O5dLAd0-m0TJ7C9bfCjBwF/view"
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
