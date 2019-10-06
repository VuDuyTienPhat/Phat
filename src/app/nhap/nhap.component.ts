import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nhap',
  templateUrl: './nhap.component.html',
  styleUrls: ['./nhap.component.css']
})
export class NhapComponent implements OnInit {
  items=[
    {
      name:"Nước ngọt",
      price:10000,
      choose:false,
      soluong:null,
      
    },
    {
      name:"Cafe",
      price:12000,
      choose:false,
      soluong:null
    },
    {
      name:"Thuốc lá",
      price:18000,
      choose:false,
      soluong:null
    },
  ];
  total(){
    let s=0;
    for(let item of this.items){
      s+=item.price*item.soluong;
    }
    return s;
  }


  constructor() { }

  ngOnInit() {
  }

}
