import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { 
}
  title = 'UserManagement';
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
