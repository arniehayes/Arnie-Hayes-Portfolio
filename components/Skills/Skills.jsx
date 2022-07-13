import React from 'react'
import style from "./Skills.module.scss";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

const Skills = () => {

  const skill_list = ["Javascript", "Typescript", "React.js", "Next.js", "Sass", "HTML", "CSS", "Node.js"]

  return (
    <section className={style.section_container}>
      <div className={style.skills_container}>
        <div className={style.title_container}>
          <h2 className={style.title}>Current Technologies</h2>
          <span className={style.long_bar} />
        </div>
        <div className={style.skill_list_container}>
          <ul className={style.skill_list}>
            {skill_list.slice(0, 4).map((item, idx) => (
              <li className={style.skill_item} id={idx}>
                <span className={style.span}>
                  <ArrowRightRoundedIcon />
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <ul className={style.skill_list}>
            {skill_list.slice(4).map((item, idx) => (
              <li className={style.skill_item} id={idx}>
                <span className={style.span}>
                  <ArrowRightRoundedIcon />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills