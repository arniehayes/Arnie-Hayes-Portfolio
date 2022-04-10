import style from "./Projects.module.scss";
import ProjectItem from "./ProjectItem";

const Projects = () => {


  // TODO:
  // 1. Make an array with <ProjectItem /> components use map inside the <ul>
  // 2. Find a better way to fit the project images OR find a new way of displaying them

    return (
      <section className={style.projects_container}>
        <h2>
          Projects
          <div />
        </h2>
        <ul className={style.projects_list}>
          <li>
            <ProjectItem
              title={"JavaScript Quiz"}
              description={`A simple way of testing your JavaScript knowledge. This
                      app aims to better your skills and give you a challenge.
                      Hosted by Netlify.`}
              img_path={"JS_QUIZ_SNIPPET.jpg"}
              img_name={"JavaScript Quiz Project"}
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
          <li>
            <ProjectItem
              title={"JavaScript Quiz"}
              description={`A simple way of testing your JavaScript knowledge. This
                      app aims to better your skills and give you a challenge.
                      Hosted by Netlify and add more stuff here but not too much
                      stuff.`}
              img_path={"work_in_progress.jpg"}
              img_name={"JavaScript Quiz Project"}
              flex_direction={"row"}
              negative_margin={"left"}
              text_align={"right"}
              list_float={"right"}
              project_list={["React.js", "Next.js", "Material UI", "SCSS"]}
            />
          </li>
        </ul>
      </section>
    );
};

export default Projects;
