import cart from "./cart.png";
function Cart(props) {
  const { quantity = 0, handleToBasketShow = Function.prototype } = props;
  return (
    <div className="cart" onClick={handleToBasketShow}>
      <img src={cart} alt="cart" />
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}
export default Cart;
