import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { debug } from 'util';
import { User } from '../Modules/user-model';
import { Router } from "@angular/router";
import { AuthenticationService } from '../_services';
import { Role } from '../_models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],


})
export class UsersComponent implements OnInit {




  isActive = true;
  title = "List of users";
  imageUrl = "D:\Study\UserManagement\src\assets\adventure.jpg";
  users;



  constructor(private service: UsersService, private router: Router, private authenticationService: AuthenticationService) {
  }

  onAdd($event) {
    localStorage.removeItem('editUserId');
    this.router.navigate(['add-user']);
  }
  isAdmin() {
    return this.authenticationService.currentUserValue.role === Role.Admin;
  }

  editUser(id: number) {
    let user = this.service.getUserByID(id);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', id.toString());
    this.router.navigate(['add-user']);
  }

  ngOnInit() {
    this.users = this.service.getUsers();
  }

  deleteUser(id: number): void {
    this.users = this.service.deleteUser(id);
  }


}
