import Nav from "../../MainPage/Header/Nav/Nav";
import style from "./Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {


  return (
    <header className={style.container}>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
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