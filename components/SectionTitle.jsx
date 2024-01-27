import React from 'react';
import { motion } from "framer-motion";
import style from "../styles/SectionTitle.module.scss";

const SectionTitle = ({title}) => {
  return (
    <motion.div
    className={style.title_container}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ type: "spring", duration: 1, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <h2 className={style.title}>{title}</h2>
    <span className={style.long_bar} />
  </motion.div>
  )
}

export default SectionTitle