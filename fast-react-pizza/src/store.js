import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice"
import Cartreducer from "./features/cart/CartSlice"
const store=configureStore({
    reducer: {
user:userReducer,
cart:Cartreducer
    }
})
export default store