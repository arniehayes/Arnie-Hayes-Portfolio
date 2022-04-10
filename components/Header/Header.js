import style from "./Header.module.scss";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
      <header className={style.container}>
          <div className={style.name}>AH</div>
          <Nav />
    </header>
  );
};

export default Header;
