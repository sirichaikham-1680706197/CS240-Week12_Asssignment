import { useCartStore } from "../stores/useCartStore";
import CartItemRow from "./CartItemRow";
import CartSummary from "./CartSummary";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  return (
    <section className="cart-section" aria-label="Product Cart">
      <div className="cart-heading">
        <h2>Product Cart</h2>
        {cart.length > 0 && <span className="cart-badge">{cart.length} รายการ</span>}
      </div>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h3>ตะกร้าสินค้ายังว่าง</h3>
          <p>เลือกสินค้าที่ต้องการจากหน้า Home</p>
        </div>
      ) : (
        <>
          <div className="cart-items">{cart.map((item) => <CartItemRow key={item.id} item={item} />)}</div>
          <CartSummary />
        </>
      )}
    </section>
  );
}
export default Cart;
