import Nav from "../../MainPage/Header/Nav/Nav";
import style from "./Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {


  return (
    <header className={style.container}>
      <motion.div
        initial={{ opacity: 0, x: -55, y: -55 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ once: true }}
        className={style.logo}
      >
        <a href="/">
          <img src="a.png" />
        </a>
      </motion.div>
      <Nav />
    </header>
  );
};

export default Header;