import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from '../single-post/single-post.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageRoutingModule,
  ]
})
export class HomepageModule {  }
