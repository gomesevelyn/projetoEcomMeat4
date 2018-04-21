import { Component, OnInit } from '@angular/core';

import {Perfume} from './perfume/perfume.model'

import {PerfumesService} from "./perfumes.service"
@Component({
  selector: 'mt-perfumes',
  templateUrl: './perfumes.component.html'
})
export class PerfumesComponent implements OnInit {

  perfumes: Perfume[]

  constructor(private perfumesService:PerfumesService) { }

  ngOnInit() {
    this.perfumesService.perfumes().subscribe(perfumes =>{
      this.perfumes = perfumes;
    } );
  }



}
