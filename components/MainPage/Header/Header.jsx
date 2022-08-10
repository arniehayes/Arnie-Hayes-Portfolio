import Nav from "./Nav/Nav";
import style from "./Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {


  return (
    <nav className={style.container}>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ once: true }}
        className={style.logo}
      >
        <a href="/">
          <img src="a.png" alt="Clicking this will take you to the home page" />
        </a>
      </motion.div>
      <Nav />
    </nav>
  );
};

export default Header;