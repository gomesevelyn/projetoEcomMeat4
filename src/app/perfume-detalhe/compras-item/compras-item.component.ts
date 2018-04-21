import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ComprasItem} from './compras-item.model'

@Component({
  selector: 'mt-compras-item',
  templateUrl: './compras-item.component.html'
})
export class ComprasItemComponent implements OnInit {

  @Input() comprasItem: ComprasItem
  @Output() add = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.comprasItem)
  }
}
