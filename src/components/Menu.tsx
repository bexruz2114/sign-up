import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface MenuProps {
  products: Product[];
}

function Menu({ products }: MenuProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400 font-poppins">No results found</p>
          <p className="text-gray-500 mt-2">Try searching for something else</p>
        </div>
      )}
    </section>
  );
}

export default Menu;
