import style from "./Slider.module.scss";

const Slider = () => {
  return (
    <div className={style.slider}>
      <div className={style.slide_track}>
        <div className={style.slider_item}>
          <img className={style.img} src="sass-240.png" alt="" />
        </div>
        <div className={style.slider_item}>
          <img className={style.img} src="nextjs.png" alt="" />
        </div>
        <div className={style.slider_item}>
          <img className={style.img} src="reactjs.png" alt="" />
        </div>
        <div className={style.slider_item}>
          <img className={style.img} src="https://www.svgrepo.com/show/303206/javascript-logo.svg" alt=""/>
        </div>
        <div className={style.slider_item}>
          <img className={style.img} src="css.png" alt="" />
        </div>
        <div className={style.slider_item}>
          <img className={style.img} src="html.jpg" alt="" />
        </div>
        <div className={style.slider_item}>
          <img className={style.img} src="github.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
