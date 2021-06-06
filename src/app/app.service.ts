import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  playVideo = new EventEmitter<any>();

  emitData(data) {
    //this.observer.next(data);
  }
}
