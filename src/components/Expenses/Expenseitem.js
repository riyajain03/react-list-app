import React from "react";
import Card from "../UI/Card";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const [title, setTitle] =useState(props.title);

  // let title = props.title;

  //   const ClickHandler = () => {
  // setTitle('Updated!');
  //     // title = "Updated!";
  //     console.log(title);
  //   };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
