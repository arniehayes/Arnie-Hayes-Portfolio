import style from "./Projects.module.scss";
import React, { useState } from "react";

const ProjectItem = ({ title, description, img_path, img_name, flex_direction, negative_margin, text_align, list_float, project_list}) => {

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
        <div className={style.project_image}>
            <div className={style.image_wrapper}>
              <img src={img_path} alt={img_name} />
            </div>
        </div>
        <div
          className={`${style.project_description} ${negative_margin === "left" ? style.negative_margin_left : style.negative_margin_right}`}
        >
          <h3 className={`${style.project_name} ${text_align === "right" ? style.text_align_right : style.text_align_left}`}>
            {/* PROJECT TITLE */}
            {title}
          </h3>
          <div className={`${style.text_container}`}>
            <p>
              {/* PROJECT DESCRIPTION */}
              {description}
            </p>
          </div>
          <ul className={`${style.project_tech_list} ${list_float === "right" ? style.justify_content_end : style.justify_content_start}`}>
            {project_list && project_list.map((item) => (
                <li className={`${list_float === "right" ? style.margin_left : style.margin_right}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
