import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ku_logo:string;
  constructor() {
    this.ku_logo = '../../assets/images/ku-logo.png';
  }

  ngOnInit() {
  }

}
