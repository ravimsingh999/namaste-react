import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItems";

const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="p-2 m-2 heading font-bold text-2xl">Cart Items</h1>
      <button
        className="p-2 m-2 bg-green-200 "
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {data.map((item) => {
          return (
            <div>
              <CartItem key={item.id} {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
