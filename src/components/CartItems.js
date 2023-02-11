import { IMG_CDN_URL } from "../config";

const CartItem = ({ cloudinaryImageId, category, name, price }) => {
  return (
    <div className="w-56 h-auto p-2 m-2 shadow-lg bg-pink-50">
      <img className="h-50 w-50" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{category}</h2>
      <h2 className="font-bold text-lg">{name}</h2>
      <h3>{price} Indian Rupies</h3>
    </div>
  );
};

export default CartItem;
