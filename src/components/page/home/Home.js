import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "../../ui/header/Header";
import Auth from "../../container/auth/Auth";
import Editor from "../editor/Editor";

const Home = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      <Header />
      {auth ? <Editor /> : <Auth />}
    </Fragment>
  );
};

export default Home;
