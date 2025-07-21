import '../style/ProductHeader.css'


const ProductHeader = ({ productCount, sortType, onSort, disabled }) => {
  return (
    <div className="product-header">
      <div className="product-count">
        <span>{productCount} Products</span>
      </div>
      <div className="sort-container">
        <select 
          className="sort-select"
          value={sortType}
          onChange={(e) => onSort(e.target.value)}
          disabled={disabled}
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}

export default ProductHeader 