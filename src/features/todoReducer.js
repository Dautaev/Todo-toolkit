import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    todo: [
        {
            text: "frontend",
            completed: false
        },

        {
            text: "frontend",
            completed: false
        },
    ]
};
export const addTodo = createAction('addTodo')
export const removeTodo = createAction('removeTodo')
export const star = createAction('star')

export const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
       state.todo.push(action.payload)
        })
        .addCase(removeTodo, (state, action) => {
       state.todo =  state.todo.filter((item, index) => index !== action.payload)
        })
        .addCase(star, (state, action) => {
            state.todo = state.todo.map((item, index) => {
                if (index=== action.payload) {
                    item.completed = !item.completed
                  return item
                }
                return item
          })
      })
})
