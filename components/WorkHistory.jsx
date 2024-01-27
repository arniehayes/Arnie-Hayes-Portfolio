import React, { useEffect, useState } from "react";
import style from "../styles/WorkHistory.module.scss";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const WorkHistory = () => {
  const workHistoryObj = [
    {
      company: "SelectQuote",
      title: "Web Developer II",
      date: " Sep 2021 - Current",
      details: [
        "Converted 7 Wordpress applications into efficient React applications in an agile environment.",
        "Streamlined and maintained multiple React & Wordpress codebases for heavily trafficked web applications simultaneously.",
        "Utilized Next.js to implement performance enhancements that resulted in a 25% page load speed increase.",
        "Implemented front end and back end features across 20 Wordpress sites and 7 React applications.",
      ],
    },
    {
      company: "W.W. Grainger",
      title: "Sales Associate",
      date: "Dec 2020 - Sep 2021",
      details: [
        "Provided solutions to maximize sales opportunities by 35%.",
        "Created an increase in customer loyalty within 6 months.",
        "Achieved a 30% increase in customer expectations.",
        "Used Salesforce daily to create new orders and locate customer accounts.",
        "Trained 2 new team members on various systems and programs.",
      ],
    },
  ];

  const [button1Clicked, setButton1Clicked] = useState(true);
  const [button2Clicked, setButton2Clicked] = useState(false);

  // i want this to hide/show whatever button is being clicked but not sure i can do that exactly if im using map??
  // but im pretty sure its possible
  const handleClick = (id) => {
    if (id === 0) {
      setButton1Clicked(!button1Clicked);
      setButton2Clicked(false);
    } else if (id === 1) {
      setButton2Clicked(!button2Clicked);
      setButton1Clicked(false);
    }
  };

  const button1 = (
    <div className={style.infoContainer}>
      <h3 className={style.infoTitle}>{workHistoryObj[0].title}</h3>
      <span className={style.infoDate}>{workHistoryObj[0].date}</span>
      {workHistoryObj[0].details.map((items) => (
        <ul className={style.infoList}>
          <li className={style.infoListItem}>{items}</li>
        </ul>
      ))}
    </div>
  );

  const button2 = (
    <div className={style.infoContainer}>
      <h3 className={style.infoTitle}>{workHistoryObj[1].title}</h3>
      <span className={style.infoDate}>{workHistoryObj[1].date}</span>
      {workHistoryObj[1].details.map((items) => (
        <ul className={style.infoList}>
          <li className={style.infoListItem}>{items}</li>
        </ul>
      ))}
    </div>
  );

  return (
    <section className={style.outer_container}>
      <div className={style.inner_container}>
        <SectionTitle title={"Experience"} />
        <div className={style.experienceContainer}>
          <div className={style.tabList}>
            {workHistoryObj.map((job, id) => (
              <div className={style.jobContainer}>
                <button
                  className={style.jobButton}
                  onClick={() => handleClick(id)}
                >
                  <span className={style.job_company}>{job.company}</span>
                </button>
              </div>
            ))}
          </div>
          {button1Clicked && button1}
          {button2Clicked && button2}
        </div>
      </div>
    </section>
  );
};
export default WorkHistory;
