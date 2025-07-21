
export const formatPrice = (price) => {
  return `Rs. ${parseFloat(price || 0).toFixed(2)}`
}

export const truncateText = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}


export const extractProductData = (product) => {
  const productData = product.product || product
  const variant = productData.variants?.[0]
  const image = productData.image || productData.images?.[0]
  
  return {
    id: productData.id,
    title: productData.title,
    price: variant?.price,
    image: image?.src,
    alt: image?.alt
  }
} 