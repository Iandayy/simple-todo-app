import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import editorReducer from "./editor.slice";
import validReducer from "./valid-slice";

const store = configureStore({
  reducer: { auth: authReducer, editor: editorReducer, valid: validReducer },
});

export default store;
