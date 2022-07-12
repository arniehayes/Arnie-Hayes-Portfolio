import React from 'react'
import style from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={style.section_container}>
      <div className={style.skills_container}>
        <div className={style.title_container}>
          <h2 className={style.title}>Current Technologies</h2>
          <span className={style.long_bar} />
        </div>
      </div>
    </section>
  );
}

export default Skills