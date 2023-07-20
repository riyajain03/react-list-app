// import ExpenseItem from "./Expenseitem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./Expensefilter";
import Expenseslist from "./Expenseslist";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  // const [filterInfoText, setfilterInfoText] = useState("2019, 2020, 2022");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setfilteredYear(selectedYear);
    // if (selectedYear === "2019") {
    //   setfilterInfoText("2020,2021 & 2022");
    // } else if (selectedYear === "2020") {
    //   setfilterInfoText("2019,2021, & 2022");
    // } else if (selectedYear === "2021") {
    //   setfilterInfoText("2019,2020 & 2022");
    // } else {
    //   setfilterInfoText("2019,2020, & 2021");
    // }
  };

  const filteredExpenses = props?.item?.filter((expense) => 
    expense.date.getFullYear().toString() === filteredYear);

  // let expensesContent = <p>No expenses found.</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

<ExpensesChart expenses={filteredExpenses} />

      {/* {expensesContent}; */}
      <Expenseslist items = {filteredExpenses} />
      {/* {filteredExpenses.length === 0 &&    <p>No expenses found.</p> }
      {filteredExpenses.length > 0  && */}
      {/* // filteredExpenses.map((expense) => (
        //   <ExpenseItem */}
      {/* // key={expense.id}
      // title={expense.title}
      // amount={expense.amount}
      // date={expense.date} */}
      {/* // /> // )) // )} */}
      {/* // {filteredExpenses.map((expense) => (
      //   <ExpenseItem
      //     key={expense.id}
      //     title={expense.title}
      //     amount={expense.amount}
      //     date={expense.date}


      //   />
      // ))} */}
    </Card>
  );
};

export default Expenses;
