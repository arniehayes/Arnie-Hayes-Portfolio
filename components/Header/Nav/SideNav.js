import style from "./SideNav.module.scss";

const SideNav = () => {
    return (
      <div className={style.side_nav_container}>
        <ul>
          <li>
            <a
              href="https://github.com/stars/arniehayes/lists/notable-projects"
              aria-label="Github"
            >
              <img src="github.png" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arnie-hayes/"
              aria-label="LinkedIn"
            >
              <img src="linkedin.png" />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Resume">
              <img src="cv.png" />
            </a>
          </li>
        </ul>
      </div>
    );
};

export default SideNav;
