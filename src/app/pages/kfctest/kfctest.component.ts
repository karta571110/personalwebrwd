import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-kfctest',
  templateUrl: './kfctest.component.html',
  styleUrls: ['./kfctest.component.css']
})
export class KfctestComponent implements OnInit {

  isMenuToggleBtnActive: boolean = false;
  imgSrcs: string[] = [
    "assets/imgs/burger.png",
    "assets/imgs/burger_fries.png",
    "assets/imgs/french_fries.png",
    "assets/imgs/fried_chicken.png"
  ]
  curImgIndex: number = 0;
  constructor(private titleService: Title) {
    setInterval(() => {
      this.prevImg();
    }, 5000)
  }

  ngOnInit(): void {
    this.titleService.setTitle('kfctest');
  }
  nextImg() {
    this.curImgIndex = this.curImgIndex + 1 >= this.imgSrcs.length ? 0 : this.curImgIndex + 1;
  }
  prevImg() {
    this.curImgIndex = this.curImgIndex - 1 < 0 ? this.imgSrcs.length - 1 : this.curImgIndex - 1;
  }
  toggleActive() {
    this.isMenuToggleBtnActive = !this.isMenuToggleBtnActive;
  }
}
