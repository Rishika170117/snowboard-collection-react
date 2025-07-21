import '../style/ErrorState.css'

const ErrorState = ({ onRetry }) => {
  return (
    <div className="error-state">
      <div className="error-icon">⚠️</div>
      <h2>Oops! Something went wrong</h2>
      <p>We couldn't load the products. Please try again.</p>
      <button className="retry-btn" onClick={onRetry}>
        Try Again
      </button>
    </div>
  )
}

export default ErrorState 