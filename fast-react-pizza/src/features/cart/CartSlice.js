import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cart=[
{
    PizzaId:12,
    Name:"Mediterranean",
    quantity:2,
    unitPrice:16,
    totalPrice:32,
}

    ]
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