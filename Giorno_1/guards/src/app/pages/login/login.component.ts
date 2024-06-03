import { AuthService } from './../../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authSvc:AuthService){}

  authData:{email:string, password:string} = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.login()
  }

}
