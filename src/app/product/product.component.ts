import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listProducts = [
    {
      "productId": "pd100",
      "imgURL": "01.jpg",
      "productName": "Laptop",
      "price": 30000,
      "Quality": 3,
    },
    {
      "productId": "pd101",
      "imgURL": "02.jpg",
      "productName": "Mobile",
      "price": 54000,
      "Quality": 5,
    },
    {
      "productId": "pd102",
      "imgURL": "04.webp",
      "productName": "Television",
      "price": 22000,
      "Quality": 3,
    },
    {
      "productId": "pd103",
      "imgURL": "03.jpg",
      "productName": "Headphone",
      "price": 1300,
      "Quality": 10,
    },


  ];

  //hàm tăng:
  Tang(id) {
    for (let i = 0; i < this.listProducts.length; i++) {
      if (this.listProducts[i].productId == id) {
        this.listProducts[i].Quality++;
      }
    }
  }
  Giam(id){
    for (let i = 0; i < this.listProducts.length; i++) {
      if (this.listProducts[i].productId == id) {
        if(this.listProducts[i].Quality>0){
          this.listProducts[i].Quality--;
        }
        
      }
    }
  }
  totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.listProducts.length; i++) {
      totalPrice = totalPrice + this.listProducts[i].price * this.listProducts[i].Quality;
    }
    return totalPrice;
  }
  
  



}
