import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

const initialState = {
  todoItems: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todoItems.push({ id: uniqueId(), name: payload, completed: false });
    },
    removeTodo: (state, { payload }) => {
      const newState = state.todoItems.filter(({ id }) => id !== payload);
      state.todoItems = newState;
    },
    toggleComplete: (state, {payload}) => {
      const currentTodo = state.todoItems.find(({ id }) => id === payload);
      currentTodo.completed = !currentTodo.completed;
    }
  },
});

export const { removeTodo, addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;