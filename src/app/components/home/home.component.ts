import { Component, AfterViewInit, Renderer2 , OnInit} from '@angular/core';
import { Events } from '../../../assets/data';
import { AppService } from '../../app.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  upComingEvents: any;
  image1: any;
  constructor(private renderer: Renderer2, private appService: AppService) {}

  ngOnInit(): void {
    this.upComingEvents = Object.assign([], Events);
    this.image1 = '../../../assets/200h-asana1.png';
    //console.log(this.upComingEvents);


    $('.owl-carousel').owlCarousel({
      rtl:true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
    $('.count').each(function () {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }

  openUrl(url, width?, height?) {
    if (width && height) {
      window.open(url, '', 'width=500,height=500');
    } else {
      window.open(url);
    }
  }

  selectTab() {}

  playVideo() {
    this.appService.playVideo.emit(true);
    //setTimeout(() => {
    let loader = this.renderer.selectRootElement('#player');
    this.renderer.setStyle(loader, 'visibility', 'visible');
    //}, 200);
  }
}
