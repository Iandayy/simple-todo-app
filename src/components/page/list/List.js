import { useSelector } from "react-redux";

const List = () => {
  const todos = useSelector((state) => state.editor.todos);
  return (
    <div>
      <h1>{todos}</h1>
    </div>
  );
};

export default List;
