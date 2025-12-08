import type { Product } from '../types/Product'
import '../styles/Comparator.css'

interface ComparatorProps {
  products: Product[]
  onRemoveFromCompare: (productId: string) => void
}

const Comparator = ({ products, onRemoveFromCompare }: ComparatorProps) => {
  return (
    <section id="comparar" className="comparador">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-balance-scale"></i>
          COMPARADOR DE PRODUTOS
        </h2>
        <div className="compare-container">
          <div className="compare-slot">
            {products[0] ? (
              <div className="compare-product">
                <button 
                  className="remove-compare"
                  onClick={() => onRemoveFromCompare(products[0].id)}
                >
                  ×
                </button>
                <img src={products[0].image} alt={products[0].name} />
                <h3>{products[0].name}</h3>
                <div className="compare-specs">
                  {Object.entries(products[0].specs).map(([key, value]) => (
                    <div key={key} className="spec-row">
                      <span className="spec-label">{key}:</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="compare-price">R$ {products[0].price.toLocaleString()}</div>
              </div>
            ) : (
              <div className="compare-placeholder">
                <i className="fas fa-plus"></i>
                <p>Adicione um produto</p>
              </div>
            )}
          </div>
          
          <div className="compare-vs">VS</div>
          
          <div className="compare-slot">
            {products[1] ? (
              <div className="compare-product">
                <button 
                  className="remove-compare"
                  onClick={() => onRemoveFromCompare(products[1].id)}
                >
                  ×
                </button>
                <img src={products[1].image} alt={products[1].name} />
                <h3>{products[1].name}</h3>
                <div className="compare-specs">
                  {Object.entries(products[1].specs).map(([key, value]) => (
                    <div key={key} className="spec-row">
                      <span className="spec-label">{key}:</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="compare-price">R$ {products[1].price.toLocaleString()}</div>
              </div>
            ) : (
              <div className="compare-placeholder">
                <i className="fas fa-plus"></i>
                <p>Adicione um produto</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparator