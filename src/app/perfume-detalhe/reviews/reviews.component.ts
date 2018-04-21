import { Component, OnInit } from '@angular/core';

import {PerfumesService} from '../../perfumes/perfumes.service'

import {Observable} from 'rxjs/Observable'

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private perfumesService: PerfumesService,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.reviews = this.perfumesService.reviewsOfPerfumes(this.route.parent.snapshot.params['id']);
  }

}
