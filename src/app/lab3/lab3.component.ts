import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CartService } from '../cart.service'
@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css']
})
export class Lab3Component implements OnInit {

  constructor(private router: Router, private cs: CartService) { }
  
  //số lượng hàng đã thêm vào giỏ:
  public Get_Number_of_items() {
    return this.cs.getItems().length;
  }
  public getTotal(){
    return this.cs.getTotal();
  }

  ngOnInit() {
   
  }

  goHome() {
    this.router.navigate(['/lab3/home']);
  }

}
