import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id;
  guitarCanChieu;
  listguitars;
  constructor(private router:Router,private route:ActivatedRoute,private ds:DataService,private location:Location) { }

  ngOnInit() {
    this.ds.getguitar().subscribe(data=>{
      this.listguitars=data;
      this.route.paramMap.subscribe(params=>{
        this.id=+params.get('id');
        this.guitarCanChieu=this.listguitars.find(x=>{
          return x.id==this.id;
        })
        
      })
    });
    
  }
  addToCart(){
    this.ds.addToCart(this.guitarCanChieu);
    console.log(this.guitarCanChieu);
    alert('Đã thêm vào giỏ hàng')
  }
  Back(){
    this.location.back();
  }

  // Next(){
  //   console.log(this.id);    
  //   this.router.navigate(['/detail',this.id++]);    
  // }

}
