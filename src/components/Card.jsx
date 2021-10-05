import './Card.css'
const Card = (props) => {
    const className = props.className
    return (  
        <div className={`card ${className}`}>{props.children}</div>
    );
}
 
export default Card;