import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "../../ui/header/Header";
import Auth from "../../container/auth/Auth";
import Editor from "../editor/Editor";
import Card from "../../ui/card/Card";

const Home = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      <Header />
      <Card>{auth ? <Editor /> : <Auth />}</Card>
    </Fragment>
  );
};

export default Home;
