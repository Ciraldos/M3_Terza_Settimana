import { iUser } from './../../../models/i-user';
import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  usersArr:iUser[] = []

  constructor(private user: UserService){}

  ngOnInit(){
    this.user.getAllUsers().subscribe((users) => {
      this.usersArr = users;
    });  }
}
