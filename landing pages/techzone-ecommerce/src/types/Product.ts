export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  image: string
  category: string
  specs: {
    [key: string]: string
  }
}

export interface CartItem extends Product {
  quantity: number
}

export default Product