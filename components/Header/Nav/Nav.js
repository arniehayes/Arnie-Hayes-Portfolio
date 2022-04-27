import style from "./Nav.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    console.log(toggleMenu);
    if (toggleMenu) {
      setToggleMenu(false);
    }
  }, []);

  const scrollLock = () => {
    if (!toggleMenu)
      document.body.style.overflow = "hidden";
    else
      document.body.style.overflow = "visible";
  }
  

  return (
    <div className={style.nav_container}>
      {/* NAV */}
      <nav className={toggleMenu ? style.open : style.navigation} id="nav">
        <a className={style.nav_icon} onClick={() => { setToggleMenu(!toggleMenu), scrollLock()}}>
          {toggleMenu ? (
            <img
              src="cross.png"
              aria-label="close icon"
              className={`${style.icon_margins} ${toggleMenu ? style.icon : style.hide_icon} `}
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
    </div>
  );
};

export default Nav;
