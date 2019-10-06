import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4-bai3',
  templateUrl: './lab4-bai3.component.html',
  styleUrls: ['./lab4-bai3.component.css']
})
export class Lab4Bai3Component implements OnInit {
  public selectNuocNgot;
  public selectCafe;
  public selectThuocLa;

  slNuocNgot:number=null;
  slCafe:number=null;
  slThuocLa:number=null;
  
      totalNuocNgot(){
        return this.slNuocNgot*10000;
      }
      totalCafe(){
        return this.slCafe*12000;
      }
      totalThuocLa(){
        return this.slThuocLa*18000;
      }
      total(){
        return this.totalNuocNgot()+this.totalCafe()+this.totalThuocLa();
      }
      

  //sáng định xem nước ngọt có đc chọn hay k
  isSelected(){
    return this.selectNuocNgot;
  }
  cafeIsSelected(){
    return this.selectCafe;
  } 
  thuocLaIsSelected(){
    return this.selectThuocLa;
  }
  items=[
    {
      name:"Nước ngọt",
      price:10000
    },
    {
      name:"Cafe",
      price:12000
    },
    {
      name:"Thuốc lá",
      price:18000
    },

  ];

  showInfo(thao){
   console.log(thao)
  }
  showTaoCoi(x){
    console.log(x.value);
  }
  constructor() { }

  ngOnInit() {
  }


}
