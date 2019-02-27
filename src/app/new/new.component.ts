import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Student } from '../model/student';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {


  constructor(private authService: AuthService,
    private flashMsg: FlashMessagesService,
    private myRoute: Router) { }

  onSubmit(data: Student) {
    console.log(data);
  }

  onLogout(data, any) {
    console.log(data);
    this.authService.register(data.email, data.password).then((res) => {
      this.flashMsg.show('Logout...', { cssClass: 'alert-success', timeout: 4000});
      this.myRoute.navigate(['/']);
    }).catch((err) => {
      this.flashMsg.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.myRoute.navigate(['/dashboard']);
    });
  }
  ngOnInit() {
  }
  }
