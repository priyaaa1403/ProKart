// using redux for state management
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default store; 