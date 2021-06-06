import { Component, OnInit, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  windowScrolled: boolean;
  headerOptions = {
    home : true,
    yoga : false
  }
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setActiveHeader(val);
      }
    });
  }
  ngOnInit(): void {}

  @HostListener('window:scroll', []) onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 150
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  setActiveHeader(route){
    for (let x in this.headerOptions){
       this.headerOptions[x] = false;
    };
    if(route.url.includes("yoga")){
      this.headerOptions['yoga'] = true;
    }else{
      this.headerOptions['home'] = true;
    }
    
  }

}
