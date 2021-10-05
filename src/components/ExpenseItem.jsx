import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    let {title, amount, date} = props

    const handleClick = () => {
      // Trying to update title on event
      console.log('clicked')
      title = 'sanket'
    }

    return (
        <Card className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        <button onClick={handleClick}>Test</button>
      </Card>
    );
  }
  
  export default ExpenseItem;