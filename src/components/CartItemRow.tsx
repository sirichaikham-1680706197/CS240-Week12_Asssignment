import type { CartItem } from "../types";
import { useCartStore } from "../stores/useCartStore";

interface CartItemRowProps { item: CartItem; }

function CartItemRow({ item }: CartItemRowProps) {
  const changeAmount = useCartStore((state) => state.changeAmount);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <article className="cart-item-row">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>ราคาต่อชิ้น ฿{item.price.toLocaleString("th-TH")}</p>
        <div className="quantity-control">
          <button type="button" aria-label="ลดจำนวน" onClick={() => changeAmount(item.id, item.amount - 1)}>−</button>
          <input aria-label={`จำนวน ${item.name}`} type="number" min={1} value={item.amount}
            onChange={(e) => changeAmount(item.id, Number(e.target.value))} />
          <button type="button" aria-label="เพิ่มจำนวน" onClick={() => changeAmount(item.id, item.amount + 1)}>+</button>
        </div>
      </div>
      <div className="cart-item-total">
        <strong>฿{(item.price * item.amount).toLocaleString("th-TH")}</strong>
        <button type="button" className="remove-button" onClick={() => removeFromCart(item.id)}>ลบสินค้า</button>
      </div>
    </article>
  );
}
export default CartItemRow;
