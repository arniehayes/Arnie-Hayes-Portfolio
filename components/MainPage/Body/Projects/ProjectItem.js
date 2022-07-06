import style from "./Projects.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectItem = ({ title, description, img_path, img_name, path_link, aria_label, flex_direction, negative_margin, text_align, list_float, project_list, external_link_path_1, external_link_path_2}) => {

    const [position, setPosition] = useState("");

  return (
    <div className={style.project_content_container}>
      <div
        className={`${style.project_content} ${
          flex_direction === "row-reverse"
            ? style.flex_direction_row_reverse
            : style.flex_direction_row
        }`}
      >
        <motion.div
          className={style.project_image_container}
          initial={{ opacity: 0, x: -55, y: -55 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.55 }}
          viewport={{ once: true }}
        >
          <div className={style.image_wrapper}>
            <a
              href={path_link}
              aria-label={aria_label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.project_image}
                src={"/" + img_path}
                alt={img_name}
                width="550px"
                height="380px"
              />
            </a>
          </div>
        </motion.div>
        <div
          className={`${style.project_description} ${
            negative_margin === "left"
              ? style.negative_margin_left
              : style.negative_margin_right
          }`}
        >
          <motion.h3
            className={`${style.project_name} ${
              text_align === "right"
                ? style.text_align_right
                : style.text_align_left
            }`}
            initial={{ opacity: 0, x: -55, y: -55 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* PROJECT TITLE */}
            {title}
          </motion.h3>
          <motion.div
            className={`${style.text_container}`}
            initial={{ opacity: 0, x: -55, y: -55 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.65 }}
            viewport={{ once: true }}
          >
            <p>
              {/* PROJECT DESCRIPTION */}
              {description}
            </p>
          </motion.div>
          <motion.ul
            className={`${style.project_tech_list} 
            ${
              list_float === "right"
                ? style.justify_content_end
                : style.justify_content_start
            }`}
            initial={{ opacity: 0, x: -55, y: -55 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {project_list &&
              project_list.map((item) => (
                <li
                  className={`${
                    list_float === "right"
                      ? style.margin_left
                      : style.margin_right
                  }`}
                >
                  {item}
                </li>
              ))}
          </motion.ul>
          <div
            className={`${style.external_link_container} ${
              text_align === "right"
                ? style.external_link_reverse
                : style.external_link_normal
            }`}
          >
            <motion.button
              className={` ${style.external_link}`}
              initial={{ opacity: 0, x: -55, y: -55 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: .75 }}
              viewport={{ once: true }}
            >
              <img
                src={external_link_path_1}
                alt="github external link"
                className={`${style.external_link_img}`}
              />
            </motion.button>
            <motion.button
              className={`${style.external_link}`}
              initial={{ opacity: 0, x: -55, y: -55 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: .75 }}
              viewport={{ once: true }}
            >
              <img
                src={external_link_path_2}
                alt="external link"
                className={`${style.external_link_img}`}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
