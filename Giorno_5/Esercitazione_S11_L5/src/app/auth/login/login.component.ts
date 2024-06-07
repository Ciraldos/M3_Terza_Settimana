import { Component } from '@angular/core';
import { iAuthData } from '../../models/i-auth-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user:iAuthData = {
    email: '',
    password: ''
  }
  constructor(private userLogin:AuthService,
    private router:Router

  ){}

  login(){
    this.userLogin.login(this.user).subscribe(()=>{
    this.router.navigate(['/dashboard'])})
  }
}
