import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YogaComponent } from './yoga.component';
import { YttcDetail1Component } from './yttc-detail1/yttc-detail1.component';

const routes: Routes = [
  {
    path: '',
    component: YogaComponent,
  },
  {
    path: ':type',
    component: YttcDetail1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YogaRoutingModule { }
