import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { userSlice } from "./usersSlice";

const myValueSlice = createSlice({
    name:'myValue',
    initialState:150,
    reducers:{
        increment(state, action){
            return state + action.payload
        },
         decrement(state, action){
            return state + action.payload
         }
    }
})
export const {increment, decrement} =myValueSlice.actions

const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers:{
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
            return state.filter(item => item.id !== action.payload)
        }

    }
})
export const {add , remove} = itemsSlice.actions




export const store = configureStore({
    reducer:{
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,

    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})