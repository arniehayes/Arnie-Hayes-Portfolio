import style from "./SideNav.module.scss";
import { motion } from "framer-motion";

const SideNav = () => {
    return (
      <motion.div
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
              <img src="icons8-github-64.png" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arnie-hayes/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="icons8-linkedin-120.png" />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1hLS6OrswD7g0IQBY5WRxE1zBjIYZxz9O/view"
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="cv.png" />
            </a>
          </li>
        </ul>
      </motion.div>
    );
};

export default SideNav;
