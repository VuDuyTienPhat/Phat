import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  numberofItems = 0;

  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getTotal() {
    let total = 0;
    for (let x of this.items) {
      total += x.dongia;
    }
    return total;
  }
  constructor() { }
}

