import style from "./SideNav.module.scss";
import { motion } from "framer-motion";

const SideNav = () => {
    return (
      <motion.aside
        className={style.side_nav_container}
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <ul>
          <li>
            <a
              href="https://github.com/stars/arniehayes/lists/notable-projects"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="icons8-github-64.png" alt="Clicking this will take you to github"/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arnie-hayes/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="icons8-linkedin-120.png" alt="Clicking this will take you to linkedin"/>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1SDfobPOnSNI5nIi9QcLrfRVrMUhekc0P/view?usp=sharing"
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="cv.png" alt="Clicking this will take you to my resume"/>
            </a>
          </li>
        </ul>
      </motion.aside>
    );
};

export default SideNav;
