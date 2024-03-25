import React, { useEffect, useState } from "react";
import style from "../styles/WorkHistory.module.scss";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const WorkHistory = () => {
  const workHistoryObj = [
    {
      company: "SelectQuote",
      title: "Software Engineer II",
      date: " Sep 2021 - Current",
      details: [
        "Orchestrated the migration of 7 Wordpress-based applications into high-performance React and Typescript based solutions within the dynamic framework of an agile development environment.",
        "Spearheaded the optimization and ongoing management of diverse React and Wordpress codebases catering to high-volume web traffic, ensuring seamless functionality across multiple applications simultaneously.",
        "Leveraged the power of Next.js to architect and deploy dynamic page routing mechanisms, culminating in a notable 25% enhancement in page load speed, thereby augmenting user experience and engagement.",
        "Proficiently executed the implementation of both front-end and back-end functionalities across a comprehensive portfolio consisting of 20 Wordpress sites and 7 React applications, showcasing adeptness in full-stack development practices.",
        "Conducted A/B tests on features and layouts, analyzing user engagement metrics to inform data-driven decisions and optimize conversion rates, resulting in measurable improvements in user experience and business outcomes.",
        "Collaborated with cross-functional teams, including developers, QA engineers, and product managers, fostering effective communication and ensuring alignment to drive efficiency and successful outcomes."
      ],
    },
    {
      company: "MKM Associates",
      title: "Freelance Software Engineer",
      date: "Apr 2021 - Sep 2023",
      details: [
        "Collaborated with cross-functional teams to translate design mockups into interactive prototypes, ensuring pixel-perfect implementation and adherence to UX/UI best practices.",
        "Developed custom reusable UI components and libraries to standardize frontend development across multiple projects, increasing development efficiency by 30%.",
        "Mentored junior developers on frontend best practices, coding standards, and emerging technologies, fostering a collaborative and knowledge-sharing environment within the team.",
        "Actively participated in Agile development sprints, contributing to sprint planning, daily stand-ups, and retrospectives to deliver high-quality features on time and within scope.",
        "Optimized frontend performance by conducting comprehensive code reviews, refactoring legacy code, and integrating performance monitoring tools, resulting in a 50% decrease in page load time.",
        "Led the development of a responsive web application from conception to deployment, resulting in a 30% increase in user engagement and a 25% decrease in bounce rate."
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
