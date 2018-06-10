import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-recommend',
  templateUrl: './article-recommend.component.html',
  styleUrls: ['./article-recommend.component.css']
})
export class ArticleRecommendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let elem=$(".article--recommend-box ul");
    let timer: number;
    timer=setInterval(function () {
      elem.find("li:first").css({marginTop:"0px"}).clone().appendTo(elem);
      elem.find("li:first").animate({marginTop:"-60px"},"slow",function () {
        elem.find("li:first").remove();
      });
    },6000);
  }

}
