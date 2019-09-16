import { Injectable } from '@angular/core'
import { User } from '../Modules/user-model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class UsersService {

    constructor() { }

    UserList = [
        {
            "name": "ahmed",
            "id": 1,
            "email": "a@test.com",
            "phone": 4353453543,
            "Status": "active"
        },
        {
            "name": "omar",
            "id": 2,
            "email": "a@test.com",
            "phone": 372636722,
            "Status": "active"
        },
        {
            "name": "ali",
            "id": 3,
            "email": "c@test.com",
            "phone": 82736,
            "Status": "soft_deleted"
        },];

    getUsers() {
        return this.UserList;
    }


    deleteUser(id: number) {
        const index = this.UserList.findIndex(x => x.id === id);
        this.UserList.splice(index, 1);

        return this.UserList;
    }

    getUserByID(id: number) {
        const index = this.UserList.findIndex(x => x.id === id);
        return of(this.UserList[index]);
    }


    createUser(user: User) {
        this.UserList.push(user);
    }

    updateUser(user: User) {

        const index = this.UserList.findIndex(x => x.id === user.id);
        this.UserList[index] = user;
        return of(user);    
    }




}