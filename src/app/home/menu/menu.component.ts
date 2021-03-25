import { Component, OnInit } from '@angular/core';
import { CostumProductsService } from '../services/costum-products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  constructor(private costumProductsService : CostumProductsService){
  }
  countPanier : number;
  menuPanier = false;
  switchPanier(){
    this.costumProductsService.togglePanier.next(!this.menuPanier);
  }
  open(selector){
    console.log(selector);
    let elem = document.querySelector(selector) as HTMLElement;
    elem.style.display = "flex";
    elem.classList.remove("fadeOut");
    elem.classList.add("fadeIn");
    /* elem.addEventListener("transitionend", ()=>{
      console.log("fin de transition fadeOut");
      elem.style.display = "none";
    }); */
  }
  
  ngOnInit() {
    this.costumProductsService.togglePanier.subscribe(status=>this.menuPanier = status);
    this.costumProductsService.gestionCountPanier.subscribe(status=>this.countPanier = status);
  }
}
