import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(private authSrv: AuthService){}

  ngOnInit(){
    this.authSrv.isLoggedIn$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn )
  }

  logout(){
    this.authSrv.logout()
  }
}
