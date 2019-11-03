import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // today: number = Date.now();//trả về số millisecond hay sedonds tính từ năm 1970 thì phải
  updatedDate;
  constructor(private ds: DataService) { }
  //số mặt hàng đặt mua:
  public orderNumber;
  //lấy cái mảng sau khi bấm nút thanh toán từ service:
  public arrProductUpdate = this.ds.arrProduct_2;

  getTotal() {
    let total = 0;
    for (let x of this.arrProductUpdate) {
      total += x.price * x.soluong;
      return total;
    }
  }

  ngOnInit() {
    // console.log(this.today);
    this.updatedDate = this.ds.updatedDate;
    this.orderNumber = this.ds.getCart().length;
  }

}
