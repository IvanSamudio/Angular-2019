import { Component, OnInit } from '@angular/core';
import { BeerDataService } from '../services/beer-data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']

})

export class BeerListComponent implements OnInit {
  public titulos: any = {
    name : 'Nombre',
    descripcion : 'Descripcion',
    precio : 'Precio',
    stock : 'Stock',
    img : "Imagen"
  }
  cervezas;

  constructor(private beerDataService : BeerDataService,private cartService: CartService) { }

  ngOnInit() {
     this.beerDataService.getBeers().subscribe(Beer=>this.cervezas = Beer);
  }

  addCart(cerveza) {
  this.cartService.addToCart(cerveza);
  cerveza.stock -= cerveza.quantity;
  }

  upQuantity(cerveza){
    if(cerveza.quantity <= cerveza.stock && cerveza.stock != 0) cerveza.quantity++
  }

  downQuantity(cerveza){
    if(cerveza.quantity != 0) cerveza.quantity--;
  }

  verifyBeerQuantity(cerveza){
    if(cerveza.quantity > cerveza.stock) {
      alert("No hay suficientes cervezas en stock");
    }
    if(cerveza.quantity < 0) {
      alert("No se pueden encargar cervezas negativas ");
    }
    cerveza.quantity = 0;
  }

}
