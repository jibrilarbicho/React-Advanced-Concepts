import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { removeFromCart } from './CartSlice'
export default function DeleteItem({pizzaId}) {
    const dispatch=useDispatch()
  return (
    <Button type="small" onClick={()=>dispatch(removeFromCart(pizzaId))}>Delete</Button>
)
}
