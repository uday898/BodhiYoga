import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  closeVideo() {
    this.appService.playVideo.emit(false);
  }
}
