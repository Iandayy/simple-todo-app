import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth-slice";

const Auth = () => {
  const [input, setInput] = useState({
    id: "",
    password: "",
  });

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <section>
      <form onSubmit={loginHandler}>
        <div>
          <label htmlFor="id">ID : </label>
          <input
            id="id"
            type="text"
            name="id"
            value={input.id}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            type="password"
            name="password"
            value={input.password}
            onChange={inputHandler}
          />
        </div>
        <button>Login</button>
      </form>
    </section>
  );
};

export default Auth;
