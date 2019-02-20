import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { BuidingsComponent } from './components/dashboard/buidings/buidings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/misc/index/index.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { UnderConstructionComponent } from './components/dashboard/under-construction/under-construction.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  // { path: 'dashboard', component: MainComponent },
  // { path: 'buildings', component: BuidingsComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'construction', component: UnderConstructionComponent },
  { path: 'dashboard',
    children: [
      {
        path: '', component: MainComponent
      },
      {
        path: 'buildings', component: BuidingsComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'construction', component: UnderConstructionComponent
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
