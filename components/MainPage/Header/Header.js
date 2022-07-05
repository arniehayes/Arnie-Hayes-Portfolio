import Nav from "../../MainPage/Header/Nav/Nav";
import style from "./Header.module.scss";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Header = () => {


  return (
    <motion.div>
      <header className={style.container}>
        <div className={style.logo}>
          <a href="/">
            <img src="a.png" />
          </a>
        </div>
        <Nav />
      </header>
    </motion.div>
  );
};

export default Header;