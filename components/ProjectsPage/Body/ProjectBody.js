import style from "./ProjectBody.module.scss";

const ProjectBody = () => {
  return (
    <section className={style.project_body}>
        <div className={style.projects_container}>
              <div className={style.projects}>
                  <ul className={style.projects_list}>
                      <li></li>
                      <li></li>
                  </ul>
              </div>
        </div>
    </section>
  );
};

export default ProjectBody;
