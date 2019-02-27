import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NewComponent } from './new/new.component';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyALQEB1_XRQvGRsrVr32oH-1qcP6BGH9rM',
  authDomain: 'be-erp-99b16.firebaseapp.com',
  databaseURL: 'https://be-erp-99b16.firebaseio.com',
  projectId: 'be-erp-99b16',
  storageBucket: 'be-erp-99b16.appspot.com',
  messagingSenderId: '263699223297'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    DashboardComponent,
    DetailsComponent,
    EditComponent,
    DeleteComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    AngularFireAuthModule
  ],
  providers: [FlashMessagesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
