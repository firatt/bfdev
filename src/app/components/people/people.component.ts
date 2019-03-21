import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  keremImagePath: string;
  erhanImagePath: string;
  merveImagePath: string;
  mohammadImagePath: string;
  samaneImagePath: string;
  jamilIagePath:string;
  idilImagePath:string;
  cansuImagePath:string;
  rezaImagePath:string;
  bilgesuImagePath:string;
  senolImagePath:string;
  gokceImagePath:string;
  firatImagePath:string;
  gursanImagePath:string;

  constructor() {
    this.keremImagePath = '../../assets/images/pekkan.jpg'
    this.erhanImagePath = '../../assets/images/erhan.jpg';
    this.merveImagePath = '../../assets/images/merve.png';
    this.mohammadImagePath = '../../assets/images/mohammad.png';
    this.samaneImagePath = "../../assets/images/samane.jpg";
    this.jamilIagePath = "../../assets/images/jamil.png";
    this.idilImagePath = "../../assets/images/idil.jpg";
    this.cansuImagePath = "../../assets/images/cansu.jpg";
    this.rezaImagePath = "../../assets/images/reza.jpg";
    this.bilgesuImagePath = "../../assets/images/bilgesu.jfif";
    this.senolImagePath = "../../assets/images/senol.jpg";
    this.gokceImagePath = "../../assets/images/gokce.jpg";
    this.firatImagePath = "../../assets/images/firat.jpg";
    this.gursanImagePath = "../../assets/images/gursan.png";

  }

  ngOnInit() {

  }

}
