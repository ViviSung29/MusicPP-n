import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images: string[];

  constructor() {
    this.images = ['assets/images/b1.jpg', 'assets/images/b2.jpg', 'assets/images/b3.jpg', 'assets/images/b4.jpg'];
  }

  ngOnInit() {
    var swiper= new Swiper('.swiper-container',{
      pagination : '.swiper-pagination',
      paginationType : 'bullets',
      direction:'horizontal',
      paginationClickable:true,
      longSwipesRatio:0.3,
      toouchRatio:1,
      observer:true,
      observeParents:true,
      autoplay:3000
    });
  }

}
