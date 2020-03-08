import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

const EditExpensePage = props => (
  <div>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push("/");
      }}
      expense={props.expense}
    />
    <button
      onClick={e => {
        props.dispatch(removeExpense(props.match.params.id));
        props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);