import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../store/auth-slice";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <h1>My Todo List</h1>
      {auth && <button onClick={logoutHandler}>Logout</button>}
    </div>
  );
};

export default Header;
