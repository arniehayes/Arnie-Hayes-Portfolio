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
              <img src="icons8-github-64.png" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arnie-hayes/"
              aria-label="LinkedIn"
            >
              <img src="icons8-linkedin-120.png" />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/uc?export=download&id=1I3aIIfgPDeDQJ0tKewHa9HixAaDp09Gg"
              aria-label="Resume"
            >
              <img src="cv.png" />
            </a>
          </li>
        </ul>
      </div>
    );
};

export default SideNav;
