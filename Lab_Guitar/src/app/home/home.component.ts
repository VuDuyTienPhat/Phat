import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any;
  cid: number;
  constructor(private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ds.getguitar().subscribe(data => {
      this.product = data;
    })
    //this.LoadData();
  }
  // LoadData() {
  //   this.route.paramMap.subscribe(para => {
  //     this.cid = +para.get('id');
  //   });
  //   if (this.cid != 0) {
  //     this.data.getguitar().subscribe(dt => {
  //       this.product = dt;
  //       this.product = this.product.filter(p => {
  //         return p.cid == this.cid;
  //       })
  //     })
  //   }
  //   else {
  //     this.data.getguitar().subscribe(data => {
  //       this.product = data;
  //     })
  //   }
  // }

}
