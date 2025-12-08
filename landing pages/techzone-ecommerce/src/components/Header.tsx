import '../styles/Header.css'

interface HeaderProps {
  cartCount: number
  onToggleCart: () => void
}

const Header = ({ cartCount, onToggleCart }: HeaderProps) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <i className="fas fa-microchip"></i>
          <span>TechZone</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#produtos">Produtos</a></li>

          <li><a href="#contato">Contato</a></li>
        </ul>
        <div className="nav-icons">
          <button className="menu-toggle" onClick={() => {
            const menu = document.querySelector('.nav-menu')
            menu?.classList.toggle('active')
          }}>
            <i className="fas fa-bars"></i>
          </button>
          <button className="cart-btn" onClick={onToggleCart}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header