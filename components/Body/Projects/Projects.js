import style from "./Projects.module.scss";
import ProjectItem from "./ProjectItem";

const Projects = () => {


  // TODO:
  // 1. Make an array with <ProjectItem /> components use map inside the <ul>
  // 2. Find a better way to fit the project images OR find a new way of displaying them

    return (
      <section className={style.projects_container}>
        <div className={`${style.big_word} ${style.filter}`}>
          <img src="projects.svg" alt="big word" />
        </div>
        <div className={style.project_items}>
          <div className={style.project_header}>
            <h2>Notable Projects</h2>
            <span className={style.long_bar} />
          </div>
          <ul className={style.projects_list}>
            <li>
              <ProjectItem
                title={"JavaScript Quiz"}
                description={`A simple way of testing your JavaScript knowledge. This
                      app aims to better your skills and give you a challenge.
                      Hosted by Netlify.`}
                img_path={"longer_js.jpg"}
                img_name={"JavaScript Quiz Project"}
                path_link={"https://js-quiz-ah.netlify.app/"}
                aria_label={"Javascript Quiz"}
                flex_direction={"row"}
                negative_margin={"left"}
                text_align={"right"}
                list_float={"right"}
                project_list={["React.js", "Next.js", "Material UI", "SCSS"]}
              />
            </li>
            <li>
              <ProjectItem
                title={"Weather App"}
                description={`Weather App using Open Weather API to display weekly updates and daily highlights,
                      as well as weather alerts.`}
                img_path={"WEATHER_APP_SNIPPET.jpg"}
                img_name={"Weather App"}
                flex_direction={"row-reverse"}
                negative_margin={"right"}
                text_align={"left"}
                list_float={"left"}
                project_list={["React.js", "SCSS", "Axios", "Open Weather API"]}
              />
            </li>
          </ul>
          <div className={style.bar_container}>
            <span className={style.long_bar} />
            <a href="/" >
              <p className={style.project_footer}>See More </p>
            </a>
          </div>
        </div>
      </section>
    );
};

export default Projects;
