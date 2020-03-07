import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./stores/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setEndDate,
  setFilterText,
  setStartDate,
  sortByAmount,
  sortByDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 100,
    createdAt: 1000
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 70,
    createdAt: 1500
  })
);

store.dispatch(setFilterText("water"));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
