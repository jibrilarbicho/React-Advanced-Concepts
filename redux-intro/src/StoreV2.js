import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import Accountreducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customerSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
const rootReducer = combineReducers({
  account: Accountreducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
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
