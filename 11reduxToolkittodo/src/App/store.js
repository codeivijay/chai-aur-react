import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/todo/todoSlice.js"


export const store = configureStore({
    reducer: todoReducer
})