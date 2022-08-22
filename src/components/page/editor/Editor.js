import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { editorActions } from "../../../store/editor.slice";
import { validActions } from "../../../store/valid-slice";
import Button from "../../ui/button/Button";

import TodoItem from "./TodoItem";

const Editor = () => {
  const value = useSelector((state) => state.valid.value);
  const isTouched = useSelector((state) => state.valid.isTouched);

  let inputIsValid = false;
  let error = !inputIsValid && isTouched;

  const titleRef = useRef();
  const dateRef = useRef();

  const todos = useSelector((state) => state.editor.todos);
  const count = useSelector((state) => state.editor.count);

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(validActions.input({ ...value, [e.target.name]: e.target.value }));
  };

  // const BlurHandler = () => {
  //   dispatch(validActions.blur());
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.title.trim().length === 0) {
      titleRef.current.focus();
      return;
    }

    if (value.date.trim().length === 0) {
      dateRef.current.focus();
      return;
    }

    dispatch(editorActions.create(value));

    dispatch(validActions.reset());
  };

  const deleteHandler = (id) => {
    dispatch(editorActions.delete(id));
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            id="title"
            type="text"
            name="title"
            value={value.title}
            ref={titleRef}
            onChange={inputHandler}
            // onBlur={BlurHandler}
          />
          {error && <p>title</p>}
        </div>
        <div>
          <label htmlFor="date">Date : </label>
          <input
            id="date"
            type="date"
            name="date"
            value={value.date}
            ref={dateRef}
            onChange={inputHandler}
            // onBlur={BlurHandler}
          />
          {error && <p>date</p>}
        </div>
        <Button>Submit</Button>
      </form>
      {count > 0 &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            date={todo.date}
            title={todo.title}
            onDelete={deleteHandler}
          />
        ))}
      {count === 0 && <p>No Todos</p>}
    </section>
  );
};

export default Editor;
