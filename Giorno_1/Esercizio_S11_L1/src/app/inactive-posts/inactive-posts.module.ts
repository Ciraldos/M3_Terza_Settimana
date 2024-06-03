import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostsComponent } from './inactive-posts.component';
import { SharedModule } from '../shared/shared/shared.module';
import { InactivePostsRoutingModule } from './inactive-posts-routing.module';



@NgModule({
  declarations: [InactivePostsComponent],
  imports: [
    CommonModule,
    SharedModule,
    InactivePostsRoutingModule
  ]
})
export class InactivePostsModule { }
