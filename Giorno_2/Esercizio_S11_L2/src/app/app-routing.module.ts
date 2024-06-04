import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenComponent } from './pages/driven/driven.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  {
    path: "driven",
    component: DrivenComponent
  },
  {
    path: "reactive",
    component: ReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
