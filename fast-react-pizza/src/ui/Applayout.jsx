import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function Applayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid  grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div  className="overflow-scroll">
      <main className=" max-w-3xl bg-red-500 mx-auto">
        
          <Outlet />
        
      </main>
      <CartOverview />

      </div>
    </div>
  );
}
