import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url="./assets/guitar.json";
  url2="./assets/categories.json"
  constructor(private http:HttpClient) { }
  getguitar(){
    return this.http.get(this.url);
  }
  getCategires(){
    return this.http.get(this.url2);
  }
  //mảng chứa các product đc thêm vào từ trang chi tiết:
  public arrProduct=[];
  //mảng chứa các product sau khi user bấm Update xác nhận ở trang giỏ hàng:
  public arrProduct_2=[];


  //add to cart:
  addToCart(guitar){
    this.arrProduct.push(guitar);
  }

  //get Cart:
  getCart(){
    return this.arrProduct;
  }
  
  //xóa cart:
  clearCart(){
    this.arrProduct=[];
  }
  
  // //biến số mặt hàng đã thêm vào giỏ:(gán từ cái mảng trong detail )
  // soMatHangThemVaoGio;
  // getsoMatHangThemVaoGio(){
  //   return this.soMatHangThemVaoGio;
  // }
  

  //biến chứa ngày cập nhật(lúc bấm nút update):
  updatedDate;
  //biến các sản phẩm thêm vào khi bấm nút update:
   
}
