import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostumesService {

  constructor() { }
  articles = [
    {
      id:0,
      name:"Lapinou",
      url:"../assets/img/lapin.jpg",
      price:400,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. Anti allergène. Existe en plusieurs coloris. De grands moments pour vos soirées ..."
    },
   {
     id:1,
     name:"Canard",
     url:"../assets/img/shopping.webp",
     price:350,
     promo:false,
     largeur:200,
     description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:2,
      name:"Chaton",
      url:"../assets/img/aerobic.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:3,
      name:"Mario",
      url:"../assets/img/mario.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:4,
      name:"Los pollos hermanos",
      url:"../assets/img/poulet.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:5,
      name:"Sushi",
      url:"../assets/img/sushi.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:6,
      name:"Queen Mum",
      url:"../assets/img/queen.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
  ];
}
