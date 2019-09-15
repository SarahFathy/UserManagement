import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersService } from './users.service';
import { Router } from "@angular/router";
import { of } from 'rxjs';

@Component({
  // selector: 'app-add-user',  
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']

})
export class AddUserComponent implements OnInit {

  userformlabel: string = 'Add User';
  userformbtn: string = 'Save';
  Status = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UsersService) {
  }

  addForm: FormGroup;
  btnvisibility: boolean = true;
  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      phone: ['', [Validators.required, Validators.maxLength(11),Validators.minLength(11)]],
      Status: ['', [Validators.required]]

    });

    this.Status = this.getStatus();


    let Userid = localStorage.getItem('editUserId');
    if (+Userid > 0) {
      this.userService.getUserByID(+Userid).subscribe(data => {
        console.log(data);
        this.addForm.patchValue(data);
      })
      this.btnvisibility = false;
      this.userformlabel = 'Edit User';
      this.userformbtn = 'Update';
    }
  }
  getStatus() {
    return [
      { id: 'active', name: 'active' },
      { id: 'soft_delete  ', name: 'soft_delete' },
    ];
  }
  onSubmit() {
    console.log('Create fire');
    of(this.userService.createUser(this.addForm.value))
      .subscribe(data => {
        this.router.navigate(['list-user']);
      },
        error => {
          alert(error);
        });
  }
  onUpdate() {
    console.log('Update fire');
    this.userService.updateUser(this.addForm.value).subscribe(data => {
      this.router.navigate(['list-user']);
    },
      error => {
        alert(error);
      });
  }
}  
