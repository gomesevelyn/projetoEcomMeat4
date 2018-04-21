
import {Injectable} from "@angular/core"

import {Observable} from "rxjs/Observable"

import {Http} from "@angular/http"

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'

import {Perfume} from "./perfume/perfume.model"

import {MEAT_API} from "../app.api"

import {ComprasItem} from "../perfume-detalhe/compras-item/compras-item.model"

@Injectable()
export class PerfumesService{
  
  //comprasOfPerfume(arg0: any): any {
  //  throw new Error("Method not implemented.");
  //}
  constructor(private http:Http){}

  perfumes(): Observable<Perfume[]>{
    return this.http.get(`${MEAT_API}/perfumes`).map(response => response.json());
  }

  perfume(id: number): Observable<Perfume>{
    return this.http.get(`${MEAT_API}/perfumes/${id}`).map(response => response.json());
  }

  reviewsOfPerfumes(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/perfumes/${id}/reviews`)
      .map(response => response.json())
     // .catch(ErrorHandler.handleError)
  }

  comprasOfPerfume(id: string): Observable<ComprasItem[]>{
    return this.http.get(`${MEAT_API}/perfumes/${id}/compras`)
      .map(response => response.json())
    //  .catch(ErrorHandler.handleError)
  }

}
