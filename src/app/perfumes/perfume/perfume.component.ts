import { Component, OnInit, Input } from '@angular/core';

import {Perfume} from './perfume.model'

@Component({
  selector: 'mt-perfume',
  templateUrl: './perfume.component.html'
})
export class PerfumeComponent implements OnInit {

  @Input() perfume: Perfume
  constructor() { }

  ngOnInit() {
  }

}
