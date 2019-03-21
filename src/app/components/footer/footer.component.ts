import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ku_logo: string;
  constructor() {
    this.ku_logo = '../../assets/images/ku-logo.png';
  }

  ngOnInit() {
    $(document).ready(function(){
      $("ul li:nth-child(3)").click(function(){
        $(".footer").css({
          "background-color": "#aaaaaa",
          "position": "fixed",
          "width": "100%",
          "bottom": "0",
          "height": "31%"
        });
      });
    });

    $(document).ready(function(){
      $("ul li:nth-child(2)").click(function(){
        $(".footer").css({
          "position": "inherit",
          "height": "31%"
        });
      });
    });

    $(document).ready(function(){
      $("ul li:nth-child(4)").click(function(){
        $(".footer").css({
          "position": "inherit",
          "height": "31%"
        });
      });
    });

    $(document).ready(function(){
      $("ul li:nth-child(5)").click(function(){
        $(".footer").css({
          "background-color": "#aaa",
          "position": "relative",
          "width": "100%",
          "bottom": "0",
          "height": "31%"
        });
      });
    });

    $(document).ready(function(){
      $("ul li:nth-child(6)").click(function(){
        $(".footer").css({
          "position": "inherit",
          "height": "31%"
        });
      });
    });

    $(document).ready(function(){
      $("ul li:nth-child(7)").click(function(){
        $(".footer").css({
          "position": "inherit",
          "height": "31%"
        });
      });
    });

    $(document).ready(function(){
      $("ul li:nth-child(8)").click(function(){
        $(".footer").css({
          "background-color": "#aaa",
          "position": "relative",
          "width": "100%",
          "bottom": "0",
          "height": "31%"
        });
      });
    });

    $(document).ready(function(){
      $("ul li:nth-child(1)").click(function(){
        $(".footer").css({
          "position": "inherit",
          "height": "32%"
        });
      });
    });


  }

}
