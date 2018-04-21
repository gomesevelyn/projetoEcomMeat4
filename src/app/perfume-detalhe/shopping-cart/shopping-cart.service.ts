import {CartItem} from './cart-item.model'
import {ComprasItem} from '../compras-item/compras-item.model'

export class ShoppingCartService{
  items: CartItem[] = []

  clear(){
    this.items = []
  }

  addItem(item: ComprasItem){
    let foundItem = this.items.find((mItem)=> mItem.comprasItem.id === item.id)
    if (foundItem){
      foundItem.quantity = foundItem.quantity + 1
    }
    else {
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev+value, 0)
  }
}
