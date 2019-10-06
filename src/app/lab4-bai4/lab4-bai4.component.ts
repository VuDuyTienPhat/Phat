import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4-bai4',
  templateUrl: './lab4-bai4.component.html',
  styleUrls: ['./lab4-bai4.component.css']
})
export class Lab4Bai4Component implements OnInit {
  public salary: number;//lấy lương
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

  public gender: String = "Nam";
  public rate: number;


  TinhTienThuong() {
  //**cách để k bị NaN */  
    if (this.rate ==null) {
      return 0;
    }
    else {
      let s = 0;
      s = this.salary * this.rate;
      if (this.gender == "Nữ") {
        s = s + 200000;
      }
      return s;
    }



  }
  constructor() { }

  ngOnInit() {
  }

}
