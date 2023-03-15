import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // 3rd Method
  // let displayContent = <p>No items to display.</p>;
  // filteredExpenses.length > 0 &&
  //   (displayContent = filteredExpenses.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   }));

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

      {/* 3rd Method */}
      {/* {displayContent} */}
      {/* 2nd Method */}
      {/* {filteredExpenses.length === 0 && <p>No items to display.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
      {/* 1st Method */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No items to display.</p>
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )} */}
    </Card>
  );
}

export default Expenses;
