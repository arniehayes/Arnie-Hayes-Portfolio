import style from "./Resume.module.scss";

const Resume = () => {
    return (
      <section className={style.resume_section}>
        <div className={style.resume_button_container} id="resume">
          <a
            href="https://drive.google.com/uc?export=download&id=1I3aIIfgPDeDQJ0tKewHa9HixAaDp09Gg"
            aria-label="Resume Download"
            target="_blank"
            rel="noopener noreferrer"
            className={style.resume_button}
          >
            <p>Check out my Resume!</p>
          </a>
        </div>
      </section>
    );
};

export default Resume;
