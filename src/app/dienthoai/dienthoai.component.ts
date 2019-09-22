import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service'
@Component({
  selector: 'app-dienthoai',
  templateUrl: './dienthoai.component.html',
  styleUrls: ['./dienthoai.component.css']
})
export class DienthoaiComponent implements OnInit {
  dienthoai = [
    {
      "ID": 1,
      "Name": "Iphone 11",
      "hang": "Apple",
      "chip": "Dragon a123",
      "dongia": 111,
      "chungloai": "Công nghệ",
      "image": "data:image/png;base64,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",
      "sl": 3,
    },
    {
      "ID": 2,
      "Name": "Iphone 7",
      "hang": "Apple",
      "chip": "Dzxc 1132",
      "dongia": 222,
      "chungloai": "Công nghệ",
      "image": "https://cdn1.vienthonga.vn/image/2016/10/2/iphone-7-plus-3.jpg",
      "sl": 3,
    },
    {
      "ID": 3,
      "Name": "Ipad",
      "hang": "Apple",
      "chip": "AA3",
      "dongia": 333,
      "chungloai": "Công nghệ",
      "image": "https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/11/636827997036790187_ipad-pro-11-wi-fi-bac-1.png",
      "sl": 3,
    },
    {
      "ID": 4,
      "Name": "Samsung A10",
      "hang": "Samsung",
      "chip": "5vzv",
      "dongia": 444,
      "chungloai": "Công nghệ",
      "image": "https://cdn.fptshop.com.vn/Uploads/Originals/2019/5/13/636933637955357473_samsung-galaxy-a10-den-1.png",
      "sl": 3,
    },
    {
      "ID": 5,
      "Name": "Xiaomi redmi note 7",
      "hang": "Xiaomi",
      "chip": "bbbb 3",
      "dongia": 555,
      "chungloai": "Công nghệ",
      "image": "https://cdn.tgdd.vn/Products/Images/42/167535/xiaomi-redmi-note-7-600x600.jpg",
      "sl": 3,
    },
    {
      "ID": 6,
      "Name": "Sony t82",
      "hang": "Sony",
      "chip": "2xcv2",
      "dongia": 666,
      "chungloai": "Công nghệ",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkYIaB6uUV5eEB7Mill3rX472JglEN8oKZ89pJBLtzY46GSmYSA",
      "sl": 3,
    },

  ]
  constructor(private router:Router,private route:ActivatedRoute,private cs:CartService) { }

  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['/lab3Home'])
  }
  addToCart(dienthoai){
    alert('đã thêm vào giỏ hàng')
    this.cs.addToCart(dienthoai);
    //kiểm tra xem đã được thêm vào items(giỏ hàng) chưa
    console.log(this.cs.getItems());
    
  }

}
