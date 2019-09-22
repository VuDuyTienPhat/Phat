import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {
  items;
  constructor(
    private cs: CartService
  ) { }

  ngOnInit() {
    this.items = this.cs.getItems();
    
  }
  s=0;
  total(){
    for(let x of this.items ){
      this.s+=x.dongia;
    }
    return this.s;
  }

  
  goBack() {
    window.history.back();
  }

}
