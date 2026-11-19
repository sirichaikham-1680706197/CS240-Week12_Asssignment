import { Link } from "react-router";
import type { Product } from "../types";
import { useCartStore } from "../stores/useCartStore";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { name, description, price, image, id } = product;

  return (
    <article className="product-card group">
      <Link to={`/product/${id}`} className="product-image-wrap" aria-label={`ดูรายละเอียด ${name}`}>
        <img src={image} alt={name} className="product-image" />
      </Link>
      <div className="product-content">
        <Link to={`/product/${id}`} className="product-name product-name-link">{name}</Link>
        <p className="product-description">{description}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="product-price">฿{price.toLocaleString("th-TH")}</span>
          <button type="button" className="buy-button" onClick={() => addToCart(product)}>Buy Now</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
