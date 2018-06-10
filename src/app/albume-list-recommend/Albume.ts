export  class Album {
  link: string;
  imgsrc: string;
  tip: string;
  msg: string;

  constructor(link: string, imgsrc: string, tip: string, msg: string) {
    this.link = link;
    this.imgsrc = imgsrc;
    this.tip = tip;
    this.msg = msg;
  }
}
