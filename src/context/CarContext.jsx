import { createContext, useContext, useEffect, useState } from 'react'

const CarContext = createContext(null)
export function CarProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('monarch-wishlist') || '[]'))
  const [compare, setCompare] = useState(() => JSON.parse(localStorage.getItem('monarch-compare') || '[]'))
  useEffect(() => localStorage.setItem('monarch-wishlist', JSON.stringify(wishlist)), [wishlist])
  useEffect(() => localStorage.setItem('monarch-compare', JSON.stringify(compare)), [compare])
  const toggleWishlist = id => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  const toggleCompare = id => setCompare(prev => prev.includes(id) ? prev.filter(x => x !== id) : prev.length >= 4 ? prev : [...prev, id])
  return <CarContext.Provider value={{ wishlist, compare, toggleWishlist, toggleCompare }}>{children}</CarContext.Provider>
}
export const useCars = () => useContext(CarContext)
