export default function SectionTitle({ eyebrow, title, text, action }) {
  return <div className="section-title"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{text && <p className="muted section-description">{text}</p>}</div>{action}</div>
}
