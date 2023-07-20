import React from "react";

import ExpenseItem from "./Expenseitem";
import "./Expenseslist.css";

const Expenseslist = (props) => {
//   let expensesContent = <p>No expenses found.</p>;

  if (props.items.length === 0){
    return <h2 className="expense-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props?.items?.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default Expenseslist;
