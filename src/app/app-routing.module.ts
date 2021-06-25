import { NgModule } from '@angular/core';
import { RouterModule, Routes ,Router } from '@angular/router';
import { CoursepageComponent } from './components/coursepage/coursepage.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'yoga',
    loadChildren: () => import('./yoga/yoga.module').then((m) => m.YogaModule),
  },
  {
    path:'coursepage', component: CoursepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        this.router.navigate(['/']); // redirect to default route
    }
  }
}
export const routingComponents = [HomeComponent];
