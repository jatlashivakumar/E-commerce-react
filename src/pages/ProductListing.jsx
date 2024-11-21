import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  return (
    <div className="max-w-[1640px] px-6 py-12 bg-gray-100">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-8">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
