import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from './active-posts.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'active',
    component: ActivePostsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ActivePostsRoutingModule { }
