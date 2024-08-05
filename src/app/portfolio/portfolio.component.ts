import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  @ViewChild('boxImg') boxImg!:ElementRef;
  currentImg:string='';
  images:string[]=[
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png'
  ]

  openBox(img:string):void{
    this.boxImg.nativeElement.classList.remove('d-none')
    this.currentImg=img;
  }
  closeBox(e:any):void{
    if(e.target==this.boxImg.nativeElement){
      this.boxImg.nativeElement.classList.add('d-none')
    }
  }

}
