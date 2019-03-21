import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  erc:string;
  tubitak:string;
  embo:string;

  constructor() { 
    this.erc = '../../assets/images/erc.jpg';
    this.tubitak = '../../assets/images/tubitak.jpg';
    this.embo = '../../assets/images/embo.jpg';
  }

  ngOnInit() {
  }

}
