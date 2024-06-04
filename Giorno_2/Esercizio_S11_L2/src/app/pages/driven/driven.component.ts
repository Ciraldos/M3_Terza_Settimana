import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrl: './driven.component.scss'
})
export class DrivenComponent {
  user = {
    name:null,
    password:null
  }

  submit(form:NgForm){
    console.log(form)
  }
}
