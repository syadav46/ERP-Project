import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  matched: any;
  notMatched: any;

  constructor(private authservice: AuthService,
    private flashMsg: FlashMessagesService,
    private myRoute: Router) {
      this.matched = false;
      this.notMatched = false;
    }

  ngOnInit() {
  }

  onPasswordValidate(data: any): any {
    if (data.password === data.conpassword) {
      this.matched = true;
      this.notMatched = false;
      console.log(data.password);
      console.log(data.conpassword);
    } else {
      this.matched = false;
      this.notMatched = true;
      console.log(data.password);
      console.log(data.conpassword);
    }
  }

  onSignup(data, any) {
    console.log(data);
    this.authservice.register(data.email, data.password).then((res) => {
      this.flashMsg.show('New User Successfully Registered..', { cssClass: 'alert-success', timeout: 4000});
      this.myRoute.navigate(['/']);
    }).catch((err) => {
      this.flashMsg.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.myRoute.navigate(['/signup']);
    });
  }

}
