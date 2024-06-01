import { useState } from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import { ClearCart, getTotalCartPrice } from "../cart/CartSlice";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const username=useSelector(state=>state.user.username)

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(state=>state.cart.cart);
  let totalcartprice=useSelector(getTotalCartPrice)
  if(withPriority ){
    totalcartprice+=totalcartprice*0.2
  }
  const formErrors = useActionData(); //to et the action when the form is not submitted
  if(!cart.length) return <EmptyCart />
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 tex-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="flex mb-5 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input grow" defaultValue={username} />
        </div>

        <div className="flex mb-5 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className=" grow">
            <input type="tel" name="phone" required className="input w-full"  />
         
          {formErrors?.phone && <p className="text-xs mt-2 text-red-700 rounded-md  p-2 bg-red-100">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="flex mb-5 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required className="input w-full" />
          </div>
        </div>

        <div className="mb-6 flex  items-center gap-6">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-600 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing Order" : `Order now for ${ formatCurrency
(              totalcartprice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);
  store.dispatch(ClearCart)
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
