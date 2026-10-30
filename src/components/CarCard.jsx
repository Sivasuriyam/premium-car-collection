import { Link } from 'react-router-dom'
import { Heart, GitCompareArrows, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { money } from '../data/cars'
import { useCars } from '../context/CarContext'

export default function CarCard({ car, index = 0 }) {
  const { wishlist, compare, toggleWishlist, toggleCompare } = useCars()
  return <motion.article className="car-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45, delay: (index % 3) * .07 }}>
    <div className="car-image-wrap"><Link to={`/cars/${car.id}`}><img className="car-image" src={car.image} alt={`${car.brand} ${car.model}`} loading="lazy" onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80' }}/></Link><span className="car-tag">{car.tag}</span><button className={`heart-btn ${wishlist.includes(car.id) ? 'active' : ''}`} onClick={() => toggleWishlist(car.id)} aria-label="Toggle wishlist"><Heart size={18} fill={wishlist.includes(car.id) ? 'currentColor' : 'none'}/></button></div>
    <div className="car-card-body"><div className="car-overline">{car.brand} <span>·</span> {car.year}</div><Link className="car-name" to={`/cars/${car.id}`}>{car.model}</Link><div className="car-meta"><span>{car.power}</span><span>{car.transmission}</span><span>{car.fuel}</span></div><div className="car-card-bottom"><div><small>Starting from</small><strong>{money(car.price)}</strong></div><div className="card-actions"><button className={`mini-action ${compare.includes(car.id) ? 'selected' : ''}`} title="Add to compare" onClick={() => toggleCompare(car.id)}><GitCompareArrows size={16}/></button><Link className="view-link" to={`/cars/${car.id}`} aria-label="View car"><ArrowUpRight size={19}/></Link></div></div></div>
  </motion.article>
}
