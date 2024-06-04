import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent {

  generi:string[] = ['uomo','donna','altro']//dati che uso solo per costruire una parte del form con un ngFor nell'html

  @ViewChild('f',{static:true}) form!:NgForm//cerco l'elemento identificato da #f grazie al decoratore viewChild e lo inserisco nella variabile form

  submit(form:NgForm){
    //Qualora volessi posso leggere il valore del parametro form per manipolare il form stesso

    console.log(this.form);//riferimento al form
    console.log(this.form.form.value);//Riferimento al valore del Form

    this.form.reset();//resetto tutti i campi che hanno la direttiva ngModel
  }

  isInvalidTouched(field:NgModel){
    return field.invalid && field.touched//Restituisce True se il Form, dopo essere stato toccato, risulta ancora non valido.
  }


  setDati(){

    const datiDaInserire = {
      authData:{
        email:'esempio@gmail.com',
        password:'password'
      },
      nome:'Mario'
    }

    this.form.form.patchValue(datiDaInserire)

  }

}
