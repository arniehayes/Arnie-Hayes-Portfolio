import style from "./Nav.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1300) {
      setToggleMenu(true);
    }
  })
  
  const disableScroll = () => {
    var xPos = window.scrollX;
    var yPos = window.scrollY;
    window.onscroll = () => {
      window.scroll(xPos, yPos);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  return (
    <div className={style.nav_container}>
      {/* BUTTON TO OPEN MENU */}
      {toggleMenu ? (
        <div
          className={style.hamburger_container}
          onClick={() => {
            {
              setToggleMenu(true);
              disableScroll();
            }
          }}
        >
          <span className={style.hamburger_box}>
            <span className={style.hamburger_inner}></span>
          </span>
        </div>
      ) : (
        <nav className={style.navigation}>
          <ul className={style.links}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>Projects</a>
            </Link>
            <Link href="/">
              <a>Resume</a>
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;
