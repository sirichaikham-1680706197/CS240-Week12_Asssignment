import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function HomePage() {
  return (
    <main className="page-container">
      <h1 className="page-title">Sirichai Khamsukalert SID 1680706197 NO. 29</h1>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </section>
    </main>
  );
}
export default HomePage;
