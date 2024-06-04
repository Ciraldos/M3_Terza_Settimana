import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  form!:FormGroup//In questa proprietà salveremo l'istanza Della classe FormGroup. Tale classe ci serve per configurare il Form stesso.

  constructor(private fb:FormBuilder){}//Form builder ci aiuta a scrivere con una sintassi un po'contratta la configurazione  del Reactive form.

  ngOnInit(){

    this.form = this.fb.group({//il form
      nome: this.fb.control(null,[Validators.required]),//il campo nome
      cognome: this.fb.control(null),//il campo cognome
      authData: this.fb.group({//il form group chiamato authData
        email:this.fb.control(null,[
          Validators.required,//validatore sincrono
          Validators.email,//validatore sincrono
          this.emailProibiteValidator//validatore sincrono
        ], this.emailEsistente),//validatore asincrono
        password:this.fb.control(null)
      }),
      sports: this.fb.array([])//un array di campi, vuoto ma ne aggiungeremo successivamente
    })

  }

  invia(){
    console.log(this.form.value);//mostra i valori inseriti
  }


  //È consigliabile creare metodi come questo che permettano di rendere più sintetica e pulita la validazione lato HTML.
  isTouchedInvalid(fieldName:string){
    const field = this.form.get(fieldName);//Cerco il campo
    return field?.invalid && field?.touched//Verifico se il campo è valido e se è stato anche toccato
  }

  getMessage(fieldName: string) {
    return this.form.get(fieldName)?.errors!['message']//restituisce il messaggio di errore dei custom validators
  }


/**
 * metodi per la gestione dei campi sport
 */
addSport(){
  let control = new FormControl(null);//creo un campo per il form
  (this.form.get('sports') as FormArray).push(control);//accedo all'array sports della riga 31 e aggiungo il campo appena creato
}

getSports(){
  return (this.form.get('sports') as FormArray).controls;//restituisce tutti i campi nell'array sports
}



  emailProibite:string[] = ['mario@rossi.it','giampaolo@paladino.it'];

//validatore custom sincrono
  //verifica l'inserimento di e-mails presenti nell'array della riga 63
  emailProibiteValidator = (formC:FormControl):ValidationErrors|null =>{

    if(this.emailProibite.includes(formC.value)){//se la mail inserita dall'utente viene trovata anche nell'array della riga 63

      return {//restituisce un oggetto contenente dettagli della validazione
        invalid:true,
        message:'Non può entrareeh!'
      }

    }

    return null//altrimenti restituisce null

  }

  //validatore asincrono
  //simula la richiesta al server per verificare se la mail inserita è già in uso
  emailEsistente(formC:AbstractControl){
    return new Promise<ValidationErrors|null>((resolve, reject)=>{//con la promise possiamo rendere asincrona l'esecuzione

      setTimeout(()=>{//simuliamo l'attesa dovuta ad una chiamata ajax

        if(formC.value == 'admin@admin.it'){//creo una situazione in cui la validazione si attiva

          resolve({//in caso di successo invio i dettagli dell'errore
            invalid:true,
            message:'Non può entrareeh!'
          })

        }

        reject(null)//se la validazione non si attiva invio null

      },2000)

    })
  }


}
