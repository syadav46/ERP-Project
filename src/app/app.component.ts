import { Component } from '@angular/core';
// tslint:disable-next-line:import-spacing
import *as firebase from 'firebase';


const settings = {timestampsInSnapshots: true};
const firebaseConfig = {
  apiKey: 'AIzaSyALQEB1_XRQvGRsrVr32oH-1qcP6BGH9rM',
  authDomain: 'be-erp-99b16.firebaseapp.com',
  databaseURL: 'https://be-erp-99b16.firebaseio.com',
  projectId: 'be-erp-99b16',
  storageBucket: 'be-erp-99b16.appspot.com',
  messagingSenderId: '263699223297'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'erpproject';

  constructor() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings(settings);
  }
}
