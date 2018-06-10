import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {
  name: string;
  mes: number;

  constructor() {
    this.name = 'haha';
    this.mes = 3;
  }

  ngOnInit() {
  }

  test(): void {
    console.log("hahaha");
  }

}
