import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.css']
})
export class OutreachComponent implements OnInit {

  outreach_1: string;
  outreach_2: string;
  outreach_3: string;
  outreach_4: string;
  outreach_5: string;
  outreach_6: string;


  constructor() { 
    this.outreach_1 = '../../assets/images/outreach1.JPG'
    this.outreach_2 = '../../assets/images/outreach2.JPG'
    this.outreach_3 = '../../assets/images/outreach3.JPG'
    this.outreach_4 = '../../assets/images/outreach4.JPG'
    this.outreach_5 = '../../assets/images/outreach5.JPG'
    this.outreach_6 = '../../assets/images/outreach6.JPG'
  }

  ngOnInit() {
  }

}
