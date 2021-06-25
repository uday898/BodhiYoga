import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { yttcDetails } from '../../../assets/data';

@Component({
  selector: 'app-yttc-detail1',
  templateUrl: './yttc-detail1.component.html',
  styleUrls: ['./yttc-detail1.component.scss'],
})
export class YttcDetail1Component implements OnInit {
  course: any;
  selectedCourse: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.course = this.route.snapshot.paramMap.get('type');
    this.course.toString().replaceAll('%', ' ');
    if (!yttcDetails[this.course]) {
       this.router.navigate(['/']);
    }
    this.selectedCourse = Object.assign([], yttcDetails[this.course]);
   
  }
}
