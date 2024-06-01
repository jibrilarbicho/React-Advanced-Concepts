import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className='relative' >
    <div className="bg-stone-800 p-4 text-stone-200 px-4 py-4 sm:px-6 text-sm md:text-base flex justify-between items-center absolute bottom-0 w-full">
    <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
    </div>
  );
}

export default CartOverview;
