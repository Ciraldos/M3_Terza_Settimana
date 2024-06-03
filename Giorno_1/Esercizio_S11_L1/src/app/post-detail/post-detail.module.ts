import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { SharedModule } from '../shared/shared/shared.module';
import { PostDetailRoutingModule } from './post-detail-routing.module';



@NgModule({
  declarations: [PostDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostDetailRoutingModule
  ]
})
export class PostDetailModule { }
