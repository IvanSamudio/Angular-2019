import { Injectable } from '@angular/core';
import { Beer } from '../clases/beer';
import 'rxjs/add/operator/map';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: Beer[] = [];
  private _itemsSubject: BehaviorSubject<Beer[]> = new BehaviorSubject(this._items);
  public items: Observable<Beer[]> = this._itemsSubject.asObservable();

  constructor() { }

  addToCart(beer) {
    let newBeer = Object.assign({}, beer);
    let alreadyInCart = false;
    this._items.forEach((b: Beer) => {
      if (b.name == newBeer.name) {
        alreadyInCart = true;
        b.quantity += newBeer.quantity;
      }
    });

    if (!alreadyInCart)
      this._items.push(newBeer);

    this._itemsSubject.next(this._items);
  }


  getItems() {
    return this._items;
  }

}
