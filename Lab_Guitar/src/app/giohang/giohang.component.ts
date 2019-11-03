import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {
  arrAddedProduct=[];//lấy về mảng arrProduct từ service

  constructor(private ds: DataService,private router:Router) { }

  ngOnInit() {
    /** nó binding 2 chiều luôn chăng ? thằng arrAddedProduct Xóa thì 
     * thằng this.ds.getCart() nó cũng xóa luôn ????
     */
    this.arrAddedProduct = this.ds.getCart();
    console.log(this.arrAddedProduct);
    // this.ds.soMatHangThemVaoGio=this.arrAddedProduct.length;
  
  }
  getTotal() {
    let total = 0;
    for (let product of this.arrAddedProduct) {
      total += product.price * product.soluong;
    }
    return total;
  }

  Delete(x) {
    //sử dụng method indexOf của array để tìm vị trí trong mảng
    let index = this.arrAddedProduct.indexOf(x);
    console.log('index=', index);
    //xóa tại vị trí đó:
    this.arrAddedProduct.splice(index, 1);
    console.log('this.arrAddedProduct=',this.arrAddedProduct);
    console.log('this.ds.getCart()=',this.ds.getCart());
  }
  updateCart() {
    let time: number = Date.now();
    //truyền time lên biến updatedDate trên service
    this.ds.updatedDate = time;
  
    /**
     * truyền mảng các sản phẩm sau khi đã bấm update xác nhận 
     * lên biến arrProduct_2 trên service để truyền tiếp qua trang checkout :
     */
    this.ds.arrProduct_2=this.arrAddedProduct;
    this.ds.clearCart();
    this.router.navigate(['/checkout'])

  }
  disabledThanhToan(){
    if(this.arrAddedProduct.length==0){
      return true;
    }
    else{
      return false;
    }
  }

}
