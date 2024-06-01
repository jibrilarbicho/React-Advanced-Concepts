import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { DecareaseItemQuantity, IncreaseItemQuantity } from './CartSlice'

export default function UpdateCartQuantity({pizzaId}) {
    const dispatch=useDispatch()
    return (
        <div className=' flex items-center gap-1 md:gap-3 px-2'>
        
        <Button type="round" onClick={()=>dispatch(IncreaseItemQuantity(pizzaId))}>+</Button>
        <Button type="round" onClick={()=>dispatch(DecareaseItemQuantity(pizzaId))}>-</Button>

        </div>
      )
}
