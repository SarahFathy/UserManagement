import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user.component';

export const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'list-user', component: UsersComponent },
  { path: 'add-user', component: AddUserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }  