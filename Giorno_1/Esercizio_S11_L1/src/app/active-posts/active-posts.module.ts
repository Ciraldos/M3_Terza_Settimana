import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivePostsComponent } from './active-posts.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ActivePostsRoutingModule } from './active-posts-routing.module';

@NgModule({
  declarations: [
    ActivePostsComponent, // Your component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ActivePostsRoutingModule
  ],
})
export class ActivePostsModule { }
