import type { Product } from '../types/Product'
import '../styles/SpecsModal.css'

interface SpecsModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

const SpecsModal = ({ product, isOpen, onClose }: SpecsModalProps) => {
  if (!isOpen || !product) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{product.name}</h2>
          <button className="close-modal" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-specs">
            <h3>Especificações Técnicas</h3>
            <div className="specs-grid">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
            <div className="product-price">
              <span className="price-old">R$ {product.originalPrice.toLocaleString()}</span>
              <span className="price-new">R$ {product.price.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecsModal