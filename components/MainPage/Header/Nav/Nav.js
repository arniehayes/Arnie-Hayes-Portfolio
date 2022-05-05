import style from "./Nav.module.scss";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { render } from "react-dom";

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const closeNav = () => {
    setToggleMenu(false);
  } 

  return (
    <div className={style.nav_container}>
      {/* NAV */}
      <nav
        className={`${style.navigation} ${toggleMenu && style.open}`}
        id="nav"
      >
        <a
          className={style.nav_icon}
          onClick={() => {
            setToggleMenu(!toggleMenu)
          }}
        >
          {toggleMenu ? (
            <img
              src="cross.png"
              aria-label="close icon"
              className={`${style.icon_margins} ${
                toggleMenu ? style.icon : style.hide_icon
              } `}
            />
          ) : (
            <img
              src="list.png"
              aria="menu icon"
              className={toggleMenu ? style.hide_icon : style.icon}
            />
          )}
        </a>
        <ul className={toggleMenu ? style.show : style.links} id="links">
          <Link href="/" scroll={false}>
            <a onClick={() => closeNav()}>Home</a>
          </Link>
          <Link href="/#projects" scroll={false}>
            <a onClick={() => closeNav()}>Projects</a>
          </Link>
          <Link href="/#resume" scroll={false}>
            <a onClick={() => closeNav()}>Resume</a>
          </Link>
          <Link href="/#contact" scroll={false}>
            <a onClick={() => closeNav()}>Contact</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
