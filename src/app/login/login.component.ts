import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService,
    private flashMsg: FlashMessagesService,
    private myRoute: Router) { }

  ngOnInit() {
  }

  onLogin(data, any) {
    console.log(data);
    this.authservice.login(data.email, data.password).then((res) => {
      this.flashMsg.show('Logged in...', { cssClass: 'alert-success', timeout: 4000});
      this.myRoute.navigate(['/dashboard']);
    }).catch((err) => {
      this.flashMsg.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.myRoute.navigate(['/']);
    });
  }

}
