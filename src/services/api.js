const API_URL = 'https://interveiw-mock-api.vercel.app/api/getProducts'


export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (!data || !data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid data format received from API')
    }
    
    return data.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to load products. Please try again.')
  }
} 