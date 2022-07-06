import style from "./Projects.module.scss";
import ProjectItem from "./ProjectItem";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {

  const projectItems = [
    {
      title: "JavaScript Quiz",
      description: `A simple way of testing your JavaScript knowledge. This
                      app aims to better your skills and give you a challenge. Created using Next.js and 
                      hosted by Netlify.`,
      img_path: "quiz-tall.png",
      img_name: "JavaScript Quiz Project",
      path_link: "https://js-quiz-ah.netlify.app/",
      aria_label: "Javascript Quiz",
      flex_direction: "row",
      negative_margin: "left",
      text_align: "right",
      list_float: "right",
      project_list: ["Next.js", "Material UI", "SCSS", "Javascript"],
      external_link_path_1: "link.png",
      external_link_path_2: "icons8-github-64.png",
      key: 1,
    },
    {
      title: "Weather App",
      description: `Weather App using Open Weather API to display current, hourly, and weekly highlights.`,
      img_path: "weather-tall.png",
      img_name: "Weather App",
      path_link: "https://weather-appv2.netlify.app/",
      flex_direction: "row-reverse",
      negative_margin: "right",
      text_align: "left",
      list_float: "left",
      project_list: [
        "Next.js",
        "SCSS",
        "Axios",
        "Open Weather API",
        "Typescript",
      ],
      external_link_path_1: "icons8-github-64.png",
      external_link_path_2: "link.png",
      key: 2,
    },
  ];

  // TODO:
  // Find a better way to fit the project images OR find a new way of displaying them

    return (
      <section className={style.projects_container}>
        <div className={`${style.big_word} ${style.filter}`}>
          <img src="/projects.svg" alt="big word" />
        </div>
        <div className={style.project_items}>
          <motion.div
            className={style.project_header}
            initial={{ opacity: 0, x: -55, y: -55 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: .5 }}
            viewport={{ once: true }}
            id="projects"
          >
            <h2>Notable Projects</h2>
            <span className={style.long_bar} />
          </motion.div>
          <ul className={style.projects_list}>
            {/* When repeating code, its best to think of it dynamically. In this case map 
            is the dynamic option */}
            {projectItems.map((item, idx) => (
              <li>
                <ProjectItem
                  title={item.title}
                  description={item.description}
                  img_path={item.img_path}
                  img_name={item.img_name}
                  path_link={item.path_link}
                  aria_label={item.aria_label}
                  flex_direction={item.flex_direction}
                  negative_margin={item.negative_margin}
                  text_align={item.text_align}
                  list_float={item.list_float}
                  project_list={item.project_list}
                  external_link_path_1={item.external_link_path_1}
                  external_link_path_2={item.external_link_path_2}
                  key={idx}
                />
              </li>
            ))}
          </ul>
          <div className={style.bar_container}>
            <span className={style.long_bar} />
            <div className={style.footer_container}>
              {/* <a href="/">
                <p className={style.project_footer}>See More </p>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    );
};

export default Projects;
