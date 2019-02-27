import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService,
    private flashMsg: FlashMessagesService,
    private myRoute: Router) { }

  ngOnInit() {
  }

  onLogout() {
this.authService.logout().then((res) => {
  this.flashMsg.show('Successfully Logout..', {cssClass: 'alert-success', timeout: 4000});
  this.myRoute.navigate(['/']);
}).catch((err) => {
  this.flashMsg.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
  this.myRoute.navigate(['/dashboard']);
});
  }

}
