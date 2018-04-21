import { Component, OnInit } from '@angular/core';
import {PerfumesService} from '../../perfumes/perfumes.service'

import {Observable} from 'rxjs/Observable'

import {ActivatedRoute} from '@angular/router'

import {ComprasItem} from '../compras-item/compras-item.model'


@Component({
  selector: 'mt-compras',
  templateUrl: './compras.component.html',
})
export class ComprasComponent implements OnInit {

  compras: Observable<ComprasItem[]>
  constructor(private perfumesService: PerfumesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.compras = this.perfumesService.
    comprasOfPerfume(this.route.parent.snapshot.params['id']);
  }

  addComprasItem(item: ComprasItem){
    console.log(item);
  }

}
