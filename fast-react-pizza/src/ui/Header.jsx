import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/searchOrder';
export default function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Jibril A.</p>
    </header>
  );
}
