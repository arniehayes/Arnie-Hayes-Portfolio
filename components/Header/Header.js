import style from "./Header.module.scss";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
      <header className={style.container}>
      <div className={style.logo}>
        <a href="/">
          <img src="a.png"/>
        </a>  
      </div>
          <Nav />
    </header>
  );
};

export default Header;
