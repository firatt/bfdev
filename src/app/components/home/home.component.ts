import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pekkanlImagePath: string;
  carousel_1:string;
  carousel_2:string;
  carousel_3:string;
  carousel_4:string;


  constructor() { 
    this.pekkanlImagePath = '../../assets/images/pekkan.jpg'
    this.carousel_1 = '../../assets/images/carousel_3.jpg'
    this.carousel_2 = '../../assets/images/carousel_2.jpg'
    this.carousel_3 = '../../assets/images/carousel_1.jpg'
    this.carousel_4 = '../../assets/images/carousel_4.jpg'

  }

  ngOnInit() {
  }

}
