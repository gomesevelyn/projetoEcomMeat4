import {ComprasItem} from '../compras-item/compras-item.model'

export class CartItem {
  constructor(public comprasItem: ComprasItem,
              public quantity: number = 1){


  }
  value(): number {
    return this.comprasItem.price * this.quantity
  }

}
