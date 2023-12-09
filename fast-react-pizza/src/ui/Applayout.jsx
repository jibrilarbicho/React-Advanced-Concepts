import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

export default function Applayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>
          <Outlet />
        </h1>
        <CartOverview />
      </main>
    </div>
  );
}
