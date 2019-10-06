import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailproductsComponent } from './detailproducts/detailproducts.component';
import { HienImageComponent } from './hien-image/hien-image.component';
import { WordComponent } from './word.component';
import { ProductComponent } from './product/product.component'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Lab3HomeComponent } from './lab3-home/lab3-home.component';
import { CtdienthoaiComponent } from './ctdienthoai/ctdienthoai.component';
import { DienthoaiComponent } from './dienthoai/dienthoai.component';
import { Lab3Component } from './lab3/lab3.component';
import { GiohangComponent } from './giohang/giohang.component';
import { Lab1Component } from './lab1/lab1.component'
import { Lab4Component } from './lab4/lab4.component';
import { Lab4Bai1Component } from './lab4-bai1/lab4-bai1.component';
import { Lab4Bai2Component } from './lab4-bai2/lab4-bai2.component';
import {FormsModule} from '@angular/forms';
import { Lab4Bai3Component } from './lab4-bai3/lab4-bai3.component';
import { Lab4Bai4Component } from './lab4-bai4/lab4-bai4.component';
import { NhapComponent } from './nhap/nhap.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailproductsComponent,
    HienImageComponent,
    WordComponent,
    ProductComponent,
    HomeComponent, DetailsComponent, Lab3HomeComponent, CtdienthoaiComponent, DienthoaiComponent, Lab3Component, GiohangComponent,
    Lab1Component,
    Lab4Component,
    Lab4Bai1Component,
    Lab4Bai2Component,
    Lab4Bai3Component,
    Lab4Bai4Component,
    NhapComponent


  ],
  imports: [
    BrowserModule,
    NgxPaginationModule, // phan trang
    FormsModule,// form

    RouterModule.forRoot([
      //lab 1:     
      {
        path: 'lab1', component: Lab1Component,
        children: [
          { path: 'bai3', component: ProductComponent },
        ]
      },
      // lab 2: 
      { path: 'home', component: HomeComponent },
      { path: 'nhap', component: NhapComponent },
      { path: 'details/:id', component: DetailsComponent },
      //lab 3 :
      {
        path: 'lab3', component: Lab3Component,
        children: [
          { path: 'home', component: Lab3HomeComponent },
          { path: 'dienthoai', component: DienthoaiComponent },
          { path: 'dienthoai/:ID', component: CtdienthoaiComponent },
          { path: 'giohang', component: GiohangComponent },
        ]

      },
      //lab 4:
      {path:'lab4',component:Lab4Component,
      children:[
        {path:'bai1',component:Lab4Bai1Component},
        {path:'bai2',component:Lab4Bai2Component},
        {path:'bai3',component:NhapComponent},
        {path:'bai4',component:Lab4Bai4Component},

      ]},
      // mới vào chuyển thẳng vào lab3 home
      {
        path: '',
        redirectTo: '/lab3/home',
        pathMatch: 'full'
      },
      




    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
