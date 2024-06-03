import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World"
        }
    ]
}



export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                //id: Date.now(), 
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //return state.todos.remove(todo.id === action.payload.id)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
         
       /*  uddateTodo: (state, action) => {
            state.todos.map((todo) => {
                if(todo.id === action.payload) action.payload.text
            })
        } */
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

