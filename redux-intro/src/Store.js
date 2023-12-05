import { combineReducers, createStore } from "redux";
import Accountreducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customerSlice";
const rootReducer = combineReducers({
  account: Accountreducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
export default store;
// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(1000, "Buy a cheap car"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer("Jibril Arbicho", "24343434"));
// console.log(store.getState());
