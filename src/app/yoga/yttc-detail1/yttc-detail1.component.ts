import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { yttcDetails } from '../../../assets/data';

@Component({
  selector: 'app-yttc-detail1',
  templateUrl: './yttc-detail1.component.html',
  styleUrls: ['./yttc-detail1.component.scss'],
})
export class YttcDetail1Component implements OnInit {
  course: string;
  selectedCourse:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.course = this.route.snapshot.paramMap.get('type');
    this.selectedCourse = Object.assign([], yttcDetails[this.course]);
  }
}
