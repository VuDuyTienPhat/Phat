import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule,Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { GiohangComponent } from './giohang/giohang.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { BassesComponent } from './basses/basses.component';
import { DrumsComponent } from './drums/drums.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    GiohangComponent,
    CheckoutComponent,
    BassesComponent,
    DrumsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'viewcart',component:GiohangComponent},
      {path:'detail/:id',component:DetailComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'basses',component:BassesComponent},
      {path:'drums',component:DrumsComponent},
      {path:'**',redirectTo:"home",pathMatch:"full"}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
