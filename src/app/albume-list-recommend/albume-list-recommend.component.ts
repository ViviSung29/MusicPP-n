import {Component, OnInit} from '@angular/core';
import {Album} from './Albume';

@Component({
  selector: 'app-albume-list-recommend',
  templateUrl: './albume-list-recommend.component.html',
  styleUrls: ['./albume-list-recommend.component.css']
})
export class AlbumeListRecommendComponent implements OnInit {
  albums: Album [];

  constructor() {
    this.albums = [
      new Album('', '../../assets/images/na1.png', '民谣', ' 惊艳的小众歌曲album'),
      new Album('', '../../assets/images/a2.png', '粤语', '千帆皆空'),
      new Album('', '../../assets/images/a3.png', '电子', '盘点那些偏爱的电子音'),
      new Album('', '../../assets/images/h-a-4.jpg', '吉他', '谁把民谣听成了酒'),
      new Album('', '../../assets/images/h-a-1.jpg', '安静', '在路上，有风说晚安'),
      new Album('', '../../assets/images/a11.png', '经典', '总有一首歌让你舍不得删除'),
      new Album('', '../../assets/images/h-a-3.jpg', '女生', '小姐姐的杂货铺'),
      new Album('', '.../../assets/images/a8.png', '民谣', '惊艳的小众歌曲...'),
      new Album('', '../../assets/images/h-a-5.jpg', '华语', '这个歌单不小众，因为收藏的人慢慢多了'),
      new Album('', '../../assets/images/a8.png', '温暖', '发呆专用'),
      new Album('', '../../assets/images/a9.png', '清新', '民谣小调，我只想跟你虚度时光'),
      new Album('', '../../assets/images/a10.png', '爱情', '我们曾相爱，想到你眼睛就红了'),
      new Album('', '../../assets/images/a5.png', '民谣', '谁的民谣入了你的心'),
      new Album('', '../../assets/images/a4.png', '安静', ' 带上耳机进京听歌，读书随处净土，闭户即是深山。'),
      new Album('', '../../assets/images/a3.png', '民谣', '赵雷舅舅你什么时候回来呀...'),
      new Album('', '../../assets/images/a2.png', '循环', '那些评论999+ 的神曲'),
      new Album('', '../../assets/images/a1.png', '安静', '给我一个安静的空间，让自己跟自己说说话'),
      new Album('', '../../assets/images/a5.png', '原生', '难忘的影视插曲')
    ];

  }

  ngOnInit() {

/*
    let elem = $("#album-list-recommend-box");
    let sum: number = 0 ;
    let max = elem.find("ul").width() -  elem.width();//往左移动最大值
    let min = elem.width();

    elem.on("swipeleft",function (event) {
      event.preventDefault();
      let t = event.swipestart.coords[0] - event.swipestop.coords[0];

      if ( Math.abs(sum) < max ){
        Math.abs(sum - t) >= max ?  sum = -max : sum = sum - t;
        $(".album-list").stop().animate({left:  sum });
      }

    });
    elem.on("swiperight",function (event) {
      let t = event.swipestop.coords[0] - event.swipestart.coords[0];
      sum + t >= 0 ?   sum = 0 :  sum = sum + t;
      $(".album-list").stop().animate({left: sum });

    });


    //

    this.albums.map((v,i,a) => {
      // console.log(x.imgsrc);
      /!*
              let imgs[i] = new Image();
              imgs[i].src = v.imgsrc;
      *!/

      // console.log(v);
    });


*/
/*
    let elem = $("#album-list-recommend-box");
    let sum: number = 0 ;
    let max = elem.find("ul").width() -  elem.width();//往左移动最大值
    let min = elem.width();

    elem.on("swipeleft",function (event) {
      event.preventDefault();
      let t = event.swipestart.coords[0] - event.swipestop.coords[0];

      if ( Math.abs(sum) < max ){
        Math.abs(sum - t) >= max ?  sum = -max : sum = sum - t;
        $(".album-list").stop().animate({left:  sum });
      }

    });
    elem.on("swiperight",function (event) {
      let t = event.swipestop.coords[0] - event.swipestart.coords[0];
      sum + t >= 0 ?   sum = 0 :  sum = sum + t;
      $(".album-list").stop().animate({left: sum });

    });


    //

    this.albums.map((v,i,a) => {
      // console.log(x.imgsrc);
      /!*
              let imgs[i] = new Image();
              imgs[i].src = v.imgsrc;
      *!/

      // console.log(v);
    });


*/


  }

}
