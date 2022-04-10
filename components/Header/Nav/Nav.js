import style from "./Nav.module.scss";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  
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
      <button
        className={style.hamburger_container}
        onClick={() => {
          {
            setToggleMenu(!toggleMenu);
            disableScroll();
          }
        }}
      >
        <span className={style.hamburger_box}>
          <span className={style.hamburger_inner}></span>
        </span>
      </button>
      {toggleMenu ? (
        <nav className={style.navigation}>
          {/* BUTTON TO CLOSE MENU */}
          <div className={style.exit_menu_container}>
            <button
              className={style.exit_menu_button}
              onClick={() => {
                {
                  setToggleMenu(false);
                  enableScroll();
                }
              }}
            >
              <span className={style.exit_menu}>
                <span className={style.exit_menu_inner}></span>
              </span>
            </button>
          </div>
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
      ) : null}
    </div>
  );
};

export default Nav;
