import { FaTimes } from "react-icons/fa";

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item ">
      {name} x {quantity} шт.{" "}
      <button className="item-btn" onClick={() => decQuantity(id)}>
        {" "}
        -{" "}
      </button>
      <button className="item-btn" onClick={() => incQuantity(id)}>
        {" "}
        +{" "}
      </button>{" "}
      = {price * quantity} руб.
      <span className="item-close" onClick={() => removeFromBasket(id)}>
        <FaTimes />
      </span>
    </li>
  );
}
export default BasketItem;
