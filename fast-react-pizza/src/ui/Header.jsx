import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
export default function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Jibril A.</p>
    </header>
  );
}
