import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './CartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuanitity=useSelector(getTotalCartQuantity)
  const totalCartPrice=useSelector(getTotalCartPrice)
if(!totalCartQuanitity)return null;
  return (
    <div className='relative' >
    <div className="bg-stone-800 p-4 text-stone-200 px-4 py-4 sm:px-6 text-sm md:text-base flex justify-between items-center absolute bottom-0 w-full">
    <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6">
        <span>{totalCartQuanitity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
    </div>
  );
}

export default CartOverview;
