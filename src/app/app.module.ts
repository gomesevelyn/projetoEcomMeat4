import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { PerfumeComponent } from './perfumes/perfume/perfume.component'
import {PerfumesService} from './perfumes/perfumes.service';
import { PerfumeDetalheComponent } from './perfume-detalhe/perfume-detalhe.component';
import { ComprasComponent } from './perfume-detalhe/compras/compras.component';
import { ComprasItemComponent } from './perfume-detalhe/compras-item/compras-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PerfumesComponent,
    PerfumeComponent,
    PerfumeDetalheComponent,
    ComprasComponent,
    ComprasItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PerfumesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
