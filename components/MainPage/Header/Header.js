import Nav from "../../MainPage/Header/Nav/Nav";
import style from "./Header.module.scss";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Header = () => {

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="card" variants={cardVariants}>
        <header className={style.container}>
          <div className={style.logo}>
            <a href="/">
              <img src="a.png" />
            </a>
          </div>
          <Nav />
        </header>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;