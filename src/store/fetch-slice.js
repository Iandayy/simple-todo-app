import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFetch = createAsyncThunk("getFetch", async () => {
  try {
    const res = await fetch(`http://localhost:3001/todos/`);
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
});

export const postFetch = createAsyncThunk("postFetch", async ({ value }) => {
  return fetch(`http://localhost:3001/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: value.id,
      title: value.title,
      date: value.date,
    }),
  }).then((res) => res.json());
});

const FetchInitial = { post: [], loading: false, title: "", date: "" };

const FetchSlice = createSlice({
  name: "FetchSlice",
  initialState: FetchInitial,
  reducers: {},
  extraReducers: {
    [getFetch.pending](state) {
      state.loading = true;
    },
    [getFetch.fulfilled](state, action) {
      state.loading = false;
      state.title = action.payload.title;
      state.date = action.payload.date;
    },
    [getFetch.rejected](state) {
      state.loading = false;
      state.title = "";
      state.date = "";
    },
  },
});

export const FetchActions = FetchSlice.actions;

export default FetchSlice.reducer;
