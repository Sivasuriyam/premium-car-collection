import { Link, NavLink, Outlet } from 'react-router-dom'
import { Heart, GitCompareArrows, Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { useCars } from '../context/CarContext'

export function Layout() {
  const [open, setOpen] = useState(false)
  const { wishlist, compare } = useCars()
  const links = [['Collection', '/cars'], ['Brands', '/brands'], ['About', '/about'], ['Contact', '/contact']]
  return <><header className="nav-shell"><nav className="nav container">
    <Link className="brandmark" to="/" onClick={() => setOpen(false)}><span className="brand-symbol">M</span><span>MONARCH<small> MOTOR COLLECTION</small></span></Link>
    <div className="desktop-links">{links.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}</div>
    <div className="nav-actions">
      <Link className="icon-link" title="Wishlist" to="/wishlist"><Heart size={18}/><span className="count">{wishlist.length}</span></Link>
      <Link className="icon-link" title="Compare" to="/compare"><GitCompareArrows size={18}/><span className="count">{compare.length}</span></Link>
      <Link className="nav-cta" to="/test-drive">Book a drive <ArrowUpRight size={15}/></Link>
      <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </nav>{open && <div className="mobile-menu">{links.map(([label, path]) => <NavLink onClick={() => setOpen(false)} key={path} to={path}>{label}</NavLink>)}<Link onClick={() => setOpen(false)} to="/wishlist">Wishlist ({wishlist.length})</Link><Link onClick={() => setOpen(false)} to="/compare">Compare ({compare.length})</Link><Link onClick={() => setOpen(false)} to="/test-drive">Book a drive</Link></div>}</header>
  <main><Outlet/></main>
  <footer className="footer"><div className="container footer-top"><div><Link className="brandmark" to="/"><span className="brand-symbol">M</span><span>MONARCH<small> MOTOR COLLECTION</small></span></Link><p className="muted footer-copy">A considered collection of exceptional automobiles. Made for those who feel every detail.</p></div><div><h4>Explore</h4><Link to="/cars">The collection</Link><Link to="/brands">Our brands</Link><Link to="/compare">Compare vehicles</Link></div><div><h4>Experience</h4><Link to="/test-drive">Book a test drive</Link><Link to="/contact">Contact concierge</Link><Link to="/faq">FAQs</Link></div><div><h4>Visit our showroom</h4><p className="muted">By appointment, Monday–Saturday<br/>10:00 AM – 7:00 PM</p><a href="mailto:hello@monarch.example">hello@monarch.example</a></div></div><div className="container footer-bottom"><span>© 2025 MONARCH Motor Collection</span><span>Designed for the drive.</span></div></footer></>
}
