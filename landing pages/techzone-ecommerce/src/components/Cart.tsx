import type { Product } from '../types/Product'
import '../styles/Cart.css'

interface CartProps {
  items: Product[]
  isOpen: boolean
  onToggle: () => void
  onRemoveItem: (productId: string) => void
}

const Cart = ({ items, isOpen, onToggle, onRemoveItem }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  const checkoutWhatsApp = () => {
    if (items.length === 0) return
    
    const itemsList = items.map(item => `• ${item.name} - R$ ${item.price.toLocaleString()}`).join('\n')
    const message = `Olá! Gostaria de finalizar minha compra:\n\n${itemsList}\n\nTotal: R$ ${total.toLocaleString()}\n\nPoderia me ajudar com o processo?`
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3><i className="fas fa-shopping-cart"></i> Carrinho</h3>
        <button className="close-cart" onClick={onToggle}>&times;</button>
      </div>
      <div className="cart-items">
        {items.length === 0 ? (
          <p className="empty-cart">Carrinho vazio</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>R$ {item.price.toLocaleString()}</p>
              </div>
              <button 
                className="remove-item"
                onClick={() => onRemoveItem(item.id)}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total">Total: R$ {total.toLocaleString()}</div>
        <button 
          className="checkout-btn" 
          onClick={checkoutWhatsApp}
          disabled={items.length === 0}
        >
          <i className="fab fa-whatsapp"></i>
          FINALIZAR NO WHATSAPP
        </button>
      </div>
    </div>
  )
}

export default Cart