import { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const { addNewExpense } = props;
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setNewPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  const onFormSubmit = (event) => {
    // Preventing form submit
    event.preventDefault();
    addNewExpense({
      id: Math.random(0, 10),
      title: newTitle,
      amount: parseFloat(newPrice),
      date: new Date(newDate)
    });
  };

  /**
   * Note how we are passing state back to value
   * attribute. This is called as controlled component
   * where state is controlling the value of element.
   * This is also similar to 2 way binding
   */
  return (
    <div className="new-expense">
      <form onSubmit={onFormSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              type="number"
              value={newPrice}
              onChange={priceChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={newDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expenses</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
