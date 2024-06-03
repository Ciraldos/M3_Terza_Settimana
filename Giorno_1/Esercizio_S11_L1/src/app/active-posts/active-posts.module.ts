import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivePostsComponent } from './active-posts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // Add this line
  ],
  declarations: [
    ActivePostsComponent, // Your component
  ],
  exports: [
    ActivePostsComponent, // Your component
  ]
})
export class ActivePostsModule { }
