import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideIndex:number;
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    this.slideIndex=1;
    console.log('Hello Home');
    this.showDivs(this.slideIndex);
  }

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

   showDivs(n) {
    var i;
    var x = document.querySelectorAll('.mySlides')
    if (n > x.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex - 1].style.display = "block";
  }



}
