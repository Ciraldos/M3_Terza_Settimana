import { Component, OnInit } from '@angular/core';
import { iUser } from '../../../models/i-user';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: iUser | null;

  constructor(private authSrv: AuthService) {}

  ngOnInit() {
    this.authSrv.user$.subscribe((user: iUser | null) => {
      this.user = user;
    });
  }
}
