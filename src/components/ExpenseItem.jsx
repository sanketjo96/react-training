import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './ExpenseItem.css'
import { useState } from 'react';

const ExpenseItem = (props) => {
    let {title, amount, date} = props

    const [titleText, setTitle] = useState(title)

    const handleClick = () => {
      // Trying to update title on event
      console.log('clicked')
      
      /**
       * This is where we are updating state variable
       * which will trigger re-render
       */
      setTitle('sanket')
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