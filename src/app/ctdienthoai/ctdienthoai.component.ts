import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service';
import {listDienThoai} from '../../listdienthoai';

@Component({
  selector: 'app-ctdienthoai',
  templateUrl: './ctdienthoai.component.html',
  styleUrls: ['./ctdienthoai.component.css']
})
export class CtdienthoaiComponent implements OnInit {
  dienthoai = listDienThoai;
  
  ctdienthoai;
  id;
  pagetitle;
  constructor(
    private route :ActivatedRoute,
    private cart :CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      para => {
        this.id = +para.get('ID');
      });
    this.ctdienthoai = this.dienthoai.find(p => p.ID === this.id);
    this.pagetitle = this.ctdienthoai.Name;
  }
  goBack() {
    window.history.back();
  }
  addtoCart()
  {
    window.alert('Bạn có chắc thêm vào giỏ hàng');
    let appProduct=Object.assign(this.ctdienthoai,{'quality':1})
    this.cart.addToCart(this.ctdienthoai);
  }
}
