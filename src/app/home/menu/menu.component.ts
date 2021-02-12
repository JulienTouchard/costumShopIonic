import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  constructor(private dataService : DataService){
  }
  panier = this.dataService.togglePanier;
  menuPanier = false;
  switchPanier(){
    this.dataService.togglePanier.next(!this.menuPanier);
  }
  
  ngOnInit() {
    this.dataService.togglePanier.subscribe(status=>this.menuPanier = status);
  }
}
