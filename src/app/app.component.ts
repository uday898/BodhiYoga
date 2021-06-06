import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private appService: AppService) {}
  windowScrolled: boolean;
  play: boolean = false;
  title = 'my-app';

  ngAfterViewInit() {
    setTimeout(() => {
      let loader = this.renderer.selectRootElement('#loader');
      this.renderer.setStyle(loader, 'display', 'none');
    }, 200);

    this.play = false;

    this.appService.playVideo.subscribe((flag:boolean) => {
      this.play = flag;
    });
  }

  openUrl(url, width?, height?) {
    if (width && height) {
      window.open(url, '', 'width=500,height=500');
    } else {
      window.open(url);
    }
  }

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
}
