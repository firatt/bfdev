import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  img_1:string;
  img_2:string;
  img_3:string;

  constructor() {
    this.img_1 = '../../assets/images/img1.png'
    this.img_2 = '../../assets/images/img2.png'
    this.img_3 = '../../assets/images/img3.jpg'
   }

  ngOnInit() {
  }

}
