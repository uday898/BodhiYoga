import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YogaRoutingModule } from './yoga-routing.module';
import { YogaComponent } from './yoga.component';
import { YttcDetail1Component } from './yttc-detail1/yttc-detail1.component';


@NgModule({
  declarations: [YogaComponent, YttcDetail1Component],
  imports: [
    CommonModule,
    YogaRoutingModule
  ]
})
export class YogaModule { }
