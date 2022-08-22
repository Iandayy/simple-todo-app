const TodoItem = (props) => {
  const deleteItem = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="todo">
      <strong>{props.title}</strong>
      <em>{props.date}</em>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default TodoItem;
