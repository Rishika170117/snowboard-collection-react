import ProductCard from './ProductCard'
import '../style/ProductGrid.css'


const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => {
        const productId = product.product?.id || product.id || index
        const uniqueKey = `${productId}-${index}`
        
        return (
          <ProductCard
            key={uniqueKey}
            product={product}
            onAddToCart={onAddToCart}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        )
      })}
    </div>
  )
}

export default ProductGrid 