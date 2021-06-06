import { Component, AfterViewInit, Renderer2 , OnInit} from '@angular/core';
import { Events } from '../../../assets/data';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  upComingEvents: any;
  constructor(private renderer: Renderer2, private appService: AppService) {}

  ngOnInit(): void {
    this.upComingEvents = Object.assign([], Events);
    //console.log(this.upComingEvents);
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