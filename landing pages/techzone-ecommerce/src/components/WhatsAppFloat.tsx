import '../styles/WhatsAppFloat.css'

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = 'Olá! Gostaria de saber mais sobre os produtos da TechZone.'
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="whatsapp-float" onClick={openWhatsApp}>
      <i className="fab fa-whatsapp"></i>
      <div className="pulse-ring"></div>
    </div>
  )
}

export default WhatsAppFloat