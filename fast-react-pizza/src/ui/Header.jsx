import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/searchOrder';
import Username from '../features/users/Username';
export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-[5px]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />{' '}
    </header>
  );
}
