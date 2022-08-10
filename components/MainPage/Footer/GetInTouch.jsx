import style from "./GetInTouch.module.scss";
import { motion } from "framer-motion";

const GetInTouch = () => {
    return (
      <motion.footer
        className={style.get_in_touch_container}
        id="contact"
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <h1>Get In Touch</h1>
        <p>
          Feel free to reach out if you have any questions or just want to chat!
        </p>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCMldlGFsFtDTVmmRZGHqpfWVSRqqdFnwzlRDQTCslwgmrsLQdZhRrcZrTHVVhNRvltPsx"
          className={style.contact_button}
          aria-label="Contact Me Button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Say Hi!</p>
        </a>
      </motion.footer>
    );
};

export default GetInTouch;
