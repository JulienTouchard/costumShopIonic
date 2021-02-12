import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Insertion dans le panier
  insertPanier : Subject<any> = new Subject<any[]>();
  // total panier
  calcPanier : Subject<number> = new Subject<number>();
  // Menu toggles
  togglePanier : Subject<boolean> = new Subject<boolean>();

  
  constructor(){
  }

} export default DataService
