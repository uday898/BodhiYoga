import { Component, OnInit } from '@angular/core';
import { yogaClasses } from '../../assets/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.scss'],
})
export class YogaComponent implements OnInit {
  classes: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.classes = Object.assign([], yogaClasses);
    window.scrollTo(0, 0);
  }

  openDetails(cardData) {
    this.router.navigate(['yoga/',cardData.id])
  }
}
