import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";

import "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteItem = () => {
    props.onDelete(props.id);
  };

  return (
    <Card>
      <div>
        <strong>{props.title}</strong>
        <em>{props.date}</em>
      </div>
      <Button onClick={deleteItem}>Delete</Button>
    </Card>
  );
};

export default TodoItem;
