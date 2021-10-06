import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filterByYear, setFilterByYear] = useState("2021");

  const handleFilterByYear = (event) => {
    setFilterByYear(event.target.value);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          filterByYear={filterByYear}
          filterByYearHandler={handleFilterByYear}
        ></ExpensesFilter>
      </Card>
      {/**
       * Note how we used JS map to evaluate markup
       * 1. Open the inspector tool and observe warning
       * 2. Go to elements > inspect list of expenses
       * 3. Try adding new item > Note that last item is flashing (as it got created recently)
       * 4. Again add new item > Note the internals of 1st expense item div > This should also flash
       * 5. How react thinks ?
       *      - Once new item added list size got changed
       *      - React dont know which item added recently
       *      - It creates new item at last of the structure
       *      - It go through all divs and make sure to reflect div contents correctly
       *      - Not very optimized ahhh ? mehhh...
       *
       * 6. Keys
       *      - If we add unique key to every item, react does this in optimized way
       *      - Adding id ensures that react can now identify list item uniquely by just comparing these IDs to
       *        what it render previously
       */}
      <Card className="expenses">
        {expenses
          .filter((expense) => {
            return expense.date.getFullYear().toString() === filterByYear
          })
          .map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })}
      </Card>
    </>
  );
};

export default Expenses;
