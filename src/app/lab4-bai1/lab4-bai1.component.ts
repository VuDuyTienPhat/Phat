import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4-bai1',
  templateUrl: './lab4-bai1.component.html',
  styleUrls: ['./lab4-bai1.component.css']
})
export class Lab4Bai1Component implements OnInit {
  title = 'BaiTap';
  public diem: number;
  public kq;

  xeploai() {
    if (this.diem < 5) {
      this.kq = "rớt"
    }
    else if(this.diem>=5) {
      this.kq = "đậu"
    }
    return this.kq;
  };
  constructor() { }

  isDau(){
    if(this.xeploai()==="đậu"){
      return true;
    }
    else{
      return false;
    }
  }
  ngOnInit() {
  }

}
