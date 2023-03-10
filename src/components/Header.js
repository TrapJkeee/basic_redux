import { useSelector, useDispatch } from "react-redux";
import { userAuthActions } from "../store/user-auth-slice";

import classes from "./Header.module.css";

const Header = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const logOutDispatch = useDispatch();

  const logOutHandelr = () => {
    logOutDispatch(userAuthActions.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          {isUserLoggedIn && (
            <li>
              <a href="\">Мои покупки</a>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <button onClick={logOutHandelr}>Выйти</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
