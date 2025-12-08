import type { Product } from '../types/Product'
import '../styles/Products.css'

interface ProductsProps {
  onAddToCart: (product: Product) => void
  onShowSpecs: (product: Product) => void
}

const Products = ({ onAddToCart, onShowSpecs }: ProductsProps) => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Smartphone Pro Max',
      description: 'Processador A17 Pro, Câmera 48MP, 5G',
      price: 3999,
      originalPrice: 4999,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400',
      category: 'smartphone',
      specs: {
        'Processador': 'A17 Pro Bionic',
        'Memória': '256GB',
        'RAM': '8GB',
        'Câmera': '48MP + 12MP + 12MP',
        'Bateria': '4422mAh',
        'Tela': '6.7" Super Retina XDR'
      }
    },
    {
      id: '2',
      name: 'Fone Wireless Pro',
      description: 'Cancelamento de ruído, 30h bateria',
      price: 899,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
      category: 'audio',
      specs: {
        'Cancelamento de Ruído': 'Ativo',
        'Bateria': '30h com case',
        'Conectividade': 'Bluetooth 5.3',
        'Resistência': 'IPX4',
        'Drivers': '40mm dinâmicos',
        'Carregamento': 'USB-C + Wireless'
      }
    },
    {
      id: '3',
      name: 'Smartwatch Ultra',
      description: 'GPS, Monitor cardíaco, À prova d\'água',
      price: 1999,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      category: 'wearable',
      specs: {
        'Tela': '1.9" Always-On Retina',
        'GPS': 'Dupla frequência',
        'Bateria': 'Até 36h',
        'Resistência': '100m à prova d\'água',
        'Sensores': 'ECG, SpO2, Temperatura',
        'Conectividade': 'WiFi, Bluetooth, Cellular'
      }
    },
    {
      id: '4',
      name: 'Drone 4K Pro',
      description: 'Câmera 4K, 45min voo, GPS',
      price: 2999,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
      category: 'drone',
      specs: {
        'Câmera': '4K 60fps',
        'Gimbal': '3 eixos mecânico',
        'Tempo de Voo': '45 minutos',
        'Alcance': '15km',
        'Velocidade': '68 km/h',
        'Obstáculos': 'Detecção omnidirecional'
      }
    }
  ]

  const buyWhatsApp = (productName: string, price: string) => {
    const message = `Olá! Gostaria de comprar o ${productName} por R$ ${price}. Poderia me ajudar?`
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="produtos" className="produtos">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-bolt"></i>
          PRODUTOS EM DESTAQUE
        </h2>
        
        <div className="produtos-grid">
          {products.map(product => (
            <div key={product.id} className="produto-card" data-product={product.category}>
              <div className="produto-image">
                <img src={product.image} alt={product.name} />
                <div className="produto-overlay">
                  <button className="btn-specs" onClick={() => onShowSpecs(product)}>
                    <i className="fas fa-info-circle"></i> SPECS
                  </button>

                </div>
              </div>
              <div className="produto-info">
                <h3>{product.name}</h3>
                <p className="produto-desc">{product.description}</p>
                <div className="produto-price">
                  <span className="price-old">R$ {product.originalPrice.toLocaleString()}</span>
                  <span className="price-new">R$ {product.price.toLocaleString()}</span>
                </div>
                <button 
                  className="btn-whatsapp" 
                  onClick={() => buyWhatsApp(product.name, product.price.toString())}
                >
                  <i className="fab fa-whatsapp"></i>
                  COMPRAR VIA WHATSAPP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products