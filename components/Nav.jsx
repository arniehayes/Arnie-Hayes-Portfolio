import style from "../styles/Nav.module.scss";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { motion} from "framer-motion";

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const closeNav = () => {
    setToggleMenu(false);
  } 

  return (
    <motion.div
      className={style.nav_container}
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0 }}
      viewport={{ once: true }}
    >
      {/* NAV */}
      <div
        className={`${style.navigation} ${toggleMenu && style.open}`}
        id="nav"
      >
        <a
          className={style.nav_icon}
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          {toggleMenu ? (
            <img
              src="cross.png"
              alt="Clicking this will close the nav menu"
              aria-label="close icon"
              className={`${style.icon_margins} ${
                toggleMenu ? style.icon : style.hide_icon
              } `}
            />
          ) : (
            <img
              src="list.png"
              alt="Clicking this will open the nav menu"
              aria-label="menu icon"
              className={toggleMenu ? style.hide_icon : style.icon}
            />
          )}
        </a>
        <ul className={toggleMenu ? style.show : style.links} id="links">
          <Link href="/#projects" scroll={false}>
            <motion.a
              className={style.list_item}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0 }}
              viewport={{ once: true }}
              onClick={() => closeNav()}
            >
              Projects
            </motion.a>
          </Link>
          <Link href="/#resume" scroll={false}>
            <motion.a
              className={style.list_item}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              onClick={() => closeNav()}
            >
              Resume
            </motion.a>
          </Link>
          <Link href="/#contact" scroll={false}>
            <motion.a
              className={style.list_item}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.25 }}
              viewport={{ once: true }}
              onClick={() => closeNav()}
            >
              Contact
            </motion.a>
          </Link>
        </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
