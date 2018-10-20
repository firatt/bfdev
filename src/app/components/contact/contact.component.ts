import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  kuMapImagePath: string;
  kuMapLink:string;

  constructor() {
    this.kuMapLink = "https://www.google.com/maps/place/Koc+University/@41.2015858,29.0712211,15z/data=!4m12!1m6!3m5!1s0x409fe093fb4f1e2f:0xb51b89285c845350!2sKoc+University!8m2!3d41.2053107!4d29.0724578!3m4!1s0x409fe093fb4f1e2f:0xb51b89285c845350!8m2!3d41.2053107!4d29.0724578";
    this.kuMapImagePath = "../../assets/images/ku_map_image.PNG"
   }

  ngOnInit() {
  }

}
