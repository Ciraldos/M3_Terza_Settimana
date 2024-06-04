import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.scss'
})
export class NgModelComponent {

  user:{nome:string, cognome:string} = {
    nome:'Mario',
    cognome:'Rossi'
  }




}
