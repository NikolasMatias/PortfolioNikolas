import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { HostListener } from "@angular/core";
import {HostBinding} from "@angular/core";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  mainNavOffset: object;

  constructor(
    private elRef: ElementRef
  ) { }

  @ViewChild('mainNav') mainNav : ElementRef;

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowsScroll() {
    let mainNavOffset = this.mainNav.nativeElement.getBoundingClientRect();
    this.mainNavOffset = {
      'navbar-shrink': false
    };
    let windowOffset = window.pageYOffset;
    let documentTop = document.documentElement.clientTop;
    let offsetTop = mainNavOffset.top+windowOffset-documentTop;

    if (offsetTop > 100) {
      this.mainNavOffset = {
        'navbar-shrink': true
      };
      return this.mainNavOffset;
    } else {
      return this.mainNavOffset;
    }
  }

}
