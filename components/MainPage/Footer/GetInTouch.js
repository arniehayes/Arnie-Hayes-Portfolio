import style from "./GetInTouch.module.scss";

const GetInTouch = () => {
    return (
      <div className={style.get_in_touch_container}>
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
      </div>
    );
};

export default GetInTouch;
