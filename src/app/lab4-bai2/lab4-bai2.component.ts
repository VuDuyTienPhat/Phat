import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4-bai2',
  templateUrl: './lab4-bai2.component.html',
  styleUrls: ['./lab4-bai2.component.css']
})
export class Lab4Bai2Component implements OnInit {
  public thuong = [
    {
      age: "DUới 25",
      rate: 0.07,

    },
    {
      age: "Từ 25 đến 40",
      rate: 0.1,

    },
    {
      age: "Trên 40",
      rate: 0.15,

    }
  ];

  public luong: number = null;
  public gender: String = "Nam";
  public rate: number = null;


  TinhTienThuong() {
    let s=0;
    s = this.luong * this.rate;
    if (this.gender == "Nữ") {
      s = s + 200000;
    }
    return s;


  }
  constructor() { }

  ngOnInit() {
  }

}
