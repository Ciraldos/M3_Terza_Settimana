import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SinglePostComponent } from 'src/app/single-post/single-post.component';



@NgModule({
  declarations: [SinglePostComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[FormsModule, SinglePostComponent]
})
export class SharedModule { }
