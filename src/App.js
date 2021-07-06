import React from "react";
import "./App.css";
//Importing custom components in tree ascending order
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  //Fetching Data Object for expenses
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //Creating a user defined function for event to get Expense
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      {/* We will pass all data to be required in expense item component as attributes*/}
      {/* We can pass the entire array of objects as attributes too*/}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
