import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cart:[]
}



const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.cart.push(action.payload)
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter(item=>item.PizzaId!==action.payload)
        },
        IncreaseItemQuantity(state,action){
            const item=state.cart.find(item=>
                item.PizzaId===action.payload)
            item.quantity++

            item.totalPrice +=item.quantity*item.unitPrice

        },
        DecareaseItemQuantity(state,action){
            const item=state.cart.find(item=>
                item.PizzaId===action.payload)
            item.quantity--

            item.totalPrice +=item.quantity*item.unitPrice
        },
        ClearCart(state){
            state.cart=[]
        }
    }
})
export const {addToCart,removeFromCart,IncreaseItemQuantity,DecareaseItemQuantity,ClearCart}=cartSlice.actions
export default cartSlice.reducer


export const getTotalCartQuantity= (state)=> state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice= (state)=> state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);