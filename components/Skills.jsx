import React from 'react'
import style from "../styles/Skills.module.scss";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { motion } from "framer-motion";
import SectionTitle from './SectionTitle';

const Skills = () => {

  const skill_list = ["Javascript", "Typescript", "React.js", "Next.js", "Sass", "HTML", "CSS", "Node.js", "Axios", "Context API", "CSS Modules", "REST API"];

  return (
    <section className={style.section_container}>
      <div className={style.skills_container}>
        <SectionTitle title={"Current Tech"}/>
        <div className={style.skill_list_container}>
          <ul className={style.skill_list}>
            {skill_list.slice(0, 6).map((item, idx) => (
              <motion.li
                className={style.skill_item}
                id={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: (0.5 + .3) }}
                viewport={{ once: true }}
              >
                <span className={style.span}>
                  {/* <CircleRoundedIcon /> */}
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
          <ul className={style.skill_list}>
            {skill_list.slice(6).map((item, idx) => (
              <motion.li
                className={style.skill_item}
                id={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: (0.5 + .6) }}
                viewport={{ once: true }}
              >
                <span className={style.span}>
                  {/* <CircleRoundedIcon /> */}
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills