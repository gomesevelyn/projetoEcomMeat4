import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'

import {PerfumesComponent} from './perfumes/perfumes.component'

import { PerfumeDetalheComponent } from './perfume-detalhe/perfume-detalhe.component'

import {ComprasComponent} from './perfume-detalhe/compras/compras.component'

import {ReviewsComponent} from './perfume-detalhe/reviews/reviews.component'

//import {OrderComponent} from './order/order.component'

export const ROUTES: Routes =[

    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'perfumes', component: PerfumesComponent},
    {path: 'perfumes/:id', component: PerfumeDetalheComponent,
      children: [
        {path: '', redirectTo: 'compras', pathMatch:'full'},
        {path: 'compras', component: ComprasComponent},
        {path: 'reviews', component: ReviewsComponent}
      ]},
    {path: 'about', component: AboutComponent},
    
]
