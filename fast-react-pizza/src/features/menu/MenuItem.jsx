import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
function MenuItem({ pizza }) {
  const dispatch=useDispatch()
  const  cart=useSelector(state=>state.cart.cart)
  const { id,name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const isExist=cart.find((item)=>item.PizzaId===id)
  console.log("isExist: " ,isExist);
 const  handleAddToCart=()=>{
  const  newItem={
    PizzaId:id,
    name,
    quantity:1,
    unitPrice,
    totalPrice:unitPrice*1,
} 
dispatch(addToCart(newItem)) }
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name}  className={`h-24 ${soldOut ? 'opacity-70 grayscale':''}`}/>
      <div className="flex grow flex-col pt-0.5 ">
        <p className="font-medium text-sm  italic text-stone-500 capitalize">{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? <p className="text-sm ">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}

         
          {!soldOut && (
            isExist ? (
              <DeleteItem pizzaId={id} /> 
            ) : (
              <Button type="small" onClick={handleAddToCart}>Add To Cart</Button>
            )
          )}
          

          </div>
      </div>
    </li>
  );
}

export default MenuItem;
