import { Component } from "@angular/core";

@Component({
  selector: "app-footer-alternative",
  templateUrl: "./footer-alternative.component.html",
  styleUrls: ["./footer-alternative.component.css"]
})
export class FooterAlternativeComponent {
  ku_logo: string;
  constructor() {
    this.ku_logo = "../../assets/images/ku-logo.png";
  }
}
