import { formatPrice, truncateText, extractProductData } from '../utils/helpers'
import '../style/ProductCard.css'


const ProductCard = ({ product, onAddToCart }) => {
  const { id, title, price, image, alt } = extractProductData(product)

  const handleAddToCart = () => {
    onAddToCart(id)
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={image || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%239ca3af" font-family="Arial" font-size="16">Snowboard Image</text></svg>'} 
          alt={alt || title || 'Snowboard'}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%239ca3af" font-family="Arial" font-size="16">Snowboard Image</text></svg>'
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{truncateText(title || 'Snowboard', 40)}</h3>
        <div className="product-price">{formatPrice(price)}</div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default ProductCard 