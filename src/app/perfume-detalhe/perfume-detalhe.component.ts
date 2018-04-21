import { Component, OnInit } from '@angular/core';
import { Perfume } from 'app/perfumes/perfume/perfume.model';
import { PerfumesService } from 'app/perfumes/perfumes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-perfume-detalhe',
  templateUrl: './perfume-detalhe.component.html',
  styleUrls: ['./perfume-detalhe.component.css']
})
export class PerfumeDetalheComponent implements OnInit {

  perfume: Perfume;

  constructor( private perfumesService:PerfumesService,
               private route: ActivatedRoute) { }

  ngOnInit() {

    let id: number;
    this.route.params.subscribe(params => id = params['id']);
    
    this.perfumesService.perfume(id).subscribe(perfumes => {
      this.perfume = perfumes;
      console.log(this.perfume);
    })
  }

}
