import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/misc/index/index.component';
import { MainComponent } from './components/dashboard/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'dashboard', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
