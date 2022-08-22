import { createSlice } from "@reduxjs/toolkit";

const editorInitialState = { todos: [], count: 0 };

const editorSlice = createSlice({
  name: "editor",
  initialState: editorInitialState,
  reducers: {
    create(state, action) {
      const todo = {
        id: Math.floor(Math.random() * 100) + 1,
        date: action.payload.date,
        title: action.payload.title,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    delete(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const editorActions = editorSlice.actions;

export default editorSlice.reducer;
