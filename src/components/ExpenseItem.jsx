import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './ExpenseItem.css'
import { useState } from 'react';

const ExpenseItem = (props) => {
    let {title, amount, date} = props

    /**
     * Usage of in built state hook
     */
    const [titleText, setTitle] = useState(title)

    const handleClick = () => {      
      /**
       * This is where we are updating state variable
       * which will trigger re-render
       */
      setTitle('sanket')

      // Notice output here
      console.log(title)
    }

    return (
        <Card className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
          <h2>{titleText}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        <button onClick={handleClick}>Test</button>
      </Card>
    );
  }
  
  export default ExpenseItem;