import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-lab3-home',
  templateUrl: './lab3-home.component.html',
  styleUrls: ['./lab3-home.component.css']
})
export class Lab3HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  goHome() {
    this.router.navigate(['/lab3Home']);
  }


}
