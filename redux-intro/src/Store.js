import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPupose: "",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestloan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPupose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanPupose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}
const store = createStore(reducer);
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestloan",
//   payload: { amount: 1000, purpose: "Buy A Car" },
// });
// console.log(store.getState());
// store.dispatch({ type: "account/payloan" });
// console.log(store.getState());
//The following functions are called action creatinhg
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestloan", payload: { amount, purpose } };
}
function payLoan() {
  return { type: "account/payloan" };
}
store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, "Buy a cheap car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());