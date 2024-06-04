import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
    loginData: FormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      fileUpload: new FormControl(null, [Validators.required]),
      textarea: new FormControl(null, [Validators.required]),
    });

    submit(form:FormGroup){
      console.log(this.loginData);
    }


}
