import { Component,OnInit } from '@angular/core';
import { CostumProductsService } from './services/costum-products.service';

@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  constructor(private costumProductsService : CostumProductsService){

  }
  menuPanier : boolean;
  ngOnInit() {
    this.costumProductsService.togglePanier.subscribe(status=>this.menuPanier = status);
  }
 

}
