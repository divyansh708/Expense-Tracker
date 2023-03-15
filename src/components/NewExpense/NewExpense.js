import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
  const [formDisplay, setFormDisplay] = useState(false);

  const addClickHandler = () => {
    setFormDisplay(true);
  };

  const cancelClickHandler = () => {
    setFormDisplay(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormDisplay(false);
  };

  return (
    <div className="new-expense">
      {formDisplay === false && (
        <button onClick={addClickHandler}>Add new expense</button>
      )}
      {formDisplay === true && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelClickHandler}/>
      )}
    </div>
  );
}

export default NewExpense;
