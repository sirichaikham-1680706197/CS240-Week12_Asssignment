import { Link, useParams } from "react-router";
import { products } from "../data/products";
import { useCartStore } from "../stores/useCartStore";

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === Number(id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return (
      <main className="page-container">
        <section className="message-card">
          <h1>ไม่พบสินค้า</h1>
          <p>ขออภัย ไม่พบสินค้าที่คุณกำลังค้นหา</p>
          <Link className="primary-link" to="/">กลับหน้าแรก</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-container">
      <Link className="back-link" to="/">← กลับไปหน้าสินค้า</Link>
      <section className="product-detail-card">
        <div className="detail-image-wrap"><img src={product.image} alt={product.name} /></div>
        <div className="detail-content">
          <p className="detail-label">PRODUCT DETAIL</p>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <p className="detail-price">฿{product.price.toLocaleString("th-TH")}</p>
          <button className="buy-button detail-buy-button" type="button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </section>
    </main>
  );
}
export default ProductDetailPage;
