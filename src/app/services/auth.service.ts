import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(userData => resolve(userData),
      err => reject(err));
    });
  }
     // check user status
     getAuth() {
       return this.afAuth.authState.toPromise();
     }

     // register user
     register(email: string, password: string) {
       return new Promise((resolve, reject) => {
         this.afAuth.auth.createUserWithEmailAndPassword(email, password)
         .then(userData => resolve(userData),
         err => reject(err));
       });
     }

logout() {
  return this.afAuth.auth.signOut();
}

  }

