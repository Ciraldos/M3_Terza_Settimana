import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PostDetailComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostDetailRoutingModule { }
