import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'beer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  beers = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.items.subscribe(data => {
      this.beers = data;
    });
  }
  totalPrice(beer) {
    return beer.precio * beer.quantity;
  }

  total() {
    let total = 0;
    console.log(this.beers);
    this.beers.forEach(beer => total += this.totalPrice(beer));
    return total
  }

}
