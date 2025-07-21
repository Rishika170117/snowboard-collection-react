import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ProductHeader from './components/ProductHeader'
import EmptyState from './components/EmptyState'
import LoadingState from './components/LoadingState'
import ProductGrid from './components/ProductGrid'
import ErrorState from './components/ErrorState'
import { fetchProducts } from './services/api'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sortType, setSortType] = useState('')

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const data = await fetchProducts()
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSort = (newSortType) => {
    setSortType(newSortType)
  }

  const getSortedProducts = () => {
    if (!sortType) return products

    const sorted = [...products]
    switch (sortType) {
      case 'price-low':
        return sorted.sort((a, b) => {
          const aProductData = a.product || a
          const bProductData = b.product || b
          const aPrice = parseFloat(aProductData.variants?.[0]?.price || 0)
          const bPrice = parseFloat(bProductData.variants?.[0]?.price || 0)
          return aPrice - bPrice
        })
      case 'price-high':
        return sorted.sort((a, b) => {
          const aProductData = a.product || a
          const bProductData = b.product || b
          const aPrice = parseFloat(aProductData.variants?.[0]?.price || 0)
          const bPrice = parseFloat(bProductData.variants?.[0]?.price || 0)
          return bPrice - aPrice
        })
      default:
        return products
    }
  }

  const renderContent = () => {
    if (loading) {
      return <LoadingState />
    }

    if (error) {
      return <ErrorState onRetry={loadProducts} />
    }

    if (products.length === 0) {
      return <EmptyState onLoadProducts={loadProducts} />
    }

    return (
      <ProductGrid 
        products={getSortedProducts()} 
        onAddToCart={(productId) => {
          console.log('Adding to cart:', productId)
        }}
      />
    )
  }

  return (
    <div className="app">
      <Hero />
      
      <main className="main-content">
        <ProductHeader 
          productCount={products.length}
          sortType={sortType}
          onSort={handleSort}
          disabled={products.length === 0}
        />        
        {renderContent()}
      </main>
    </div>
  )
}

export default App
