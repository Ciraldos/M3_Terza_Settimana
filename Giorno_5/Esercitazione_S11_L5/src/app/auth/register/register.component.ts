import { Component } from '@angular/core';
import { iUser } from '../../models/i-user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  newUser:Partial<iUser> = {}
  constructor(private authSrv:AuthService){}

  register(){
    this.authSrv.register(this.newUser).subscribe()
  }
}
