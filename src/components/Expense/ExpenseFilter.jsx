import React from "react";

import "./ExpenseFilter.css";

const YEAR_DATA = ["2022", "2021", "2020", "2019"];

const ExpensesFilter = ({ filterByYear, filterByYearHandler }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onSelect={filterByYearHandler} defaultValue={filterByYear}>
          {YEAR_DATA.map((year) => {
            return (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
