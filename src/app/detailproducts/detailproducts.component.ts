import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-detailproducts',
  templateUrl: './detailproducts.component.html',
  styleUrls: ['./detailproducts.component.css']
})
export class DetailproductsComponent implements OnInit {
  constructor() { }


  ngOnInit() {
    // $(document).ready(function () {

    //   $('.stars-inner').css("width", "30%");
    //   $('.btn').click(function () {
    //     alert('hihihi');
    //   });
    // });


  }
  listproduct = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "1.jpg",
      "percentage": (3.2 / 5 * 100)

    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "2.jpg",
      "percentage": "33px",


    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "3.jpg",
      "percentage": (4.8) / 5 * 100,

    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "4.jpg",
      "percentage": (3.7) / 5 * 100,

    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "5.jpg",
      "percentage": (4.6) / 5 * 100,
    },
  ];
  flag = false;
  AnHien() {
    this.flag = !this.flag;
    return this.flag;
  }

  noidungbutton = "Hide";




}
