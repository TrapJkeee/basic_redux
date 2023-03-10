import { useDispatch } from "react-redux";
import { userAuthActions } from "../store/user-auth-slice";

import classes from "./Auth.module.css";

const Auth = () => {
  const logInDispatch = useDispatch();

  const logInHandelr = (event) => {
    event.preventDefault();
    logInDispatch(userAuthActions.logIn());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={logInHandelr}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" />
          </div>
          <button>Войти</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
