import { useCartStore } from "../stores/useCartStore";

function CartSummary() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
  const handleCheckout = () => {
    if (cart.length === 0) return;
    window.alert("สั่งซื้อสินค้าเรียบร้อยแล้ว ขอบคุณที่ใช้บริการ");
    clearCart();
  };
  return (
    <div className="cart-summary">
      <div className="summary-line"><span>จำนวนสินค้าทั้งหมด</span><strong>{totalAmount} ชิ้น</strong></div>
      <div className="summary-line total-line"><span>ราคารวมทั้งหมด</span><strong>฿{totalPrice.toLocaleString("th-TH")}</strong></div>
      <button type="button" className="checkout-button" onClick={handleCheckout}>สั่งซื้อสินค้า / Checkout</button>
    </div>
  );
}
export default CartSummary;
