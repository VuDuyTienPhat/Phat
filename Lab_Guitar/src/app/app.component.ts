import { Component } from '@angular/core';
import {DataService} from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai16';
  detail:any;
  constructor(public ds:DataService) { }

  ngOnInit() {
    this.ds.getCategires().subscribe(data=>{
      this.detail=data;
    })
  }
  
}
