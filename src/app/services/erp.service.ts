import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as firebase from 'firebase';
import { Student } from '../model/student';


@Injectable({
  providedIn: 'root'
})
export class ErpService {

  ref = firebase.firestore().collection('students');
  constructor()  {}

  createStudent(data: Student): Observable<any> {
    return new Observable( (observer) => {
      this.ref.add(data).then( (doc) => {
observer.next({
  key: doc.id
});
      });
    });
  }
}
