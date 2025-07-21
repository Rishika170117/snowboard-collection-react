import '../style/EmptyState.css'

const EmptyState = ({ onLoadProducts }) => {
  return (
    <div className="empty-state">
      <div className="empty-illustration">
        <div className="box-container">
          <div className="box"></div>
          <div className="fly"></div>
        </div>
      </div>
      <h2 className="empty-title">Oops... looks like the shelves are empty!</h2>
      <p className="empty-description">
        Smash that "Load Products" button to fix this tragic situation.
      </p>
      <button 
        className="load-products-btn"
        onClick={onLoadProducts}
      >
        Load Products
      </button>
    </div>
  )
}

export default EmptyState 