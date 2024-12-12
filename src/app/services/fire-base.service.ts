import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA33Otyk6t28ig2aGf0B5Q8w6DaxCHaNOI',
      authDomain: 'cricboss-bdbee.firebaseapp.com',
      projectId: 'cricboss-bdbee',
      storageBucket: 'cricboss-bdbee.firebasestorage.app',
      messagingSenderId: '261905170287',
      appId: '1:261905170287:web:5fa7f1fd8f410c848df29a',
      measurementId: 'G-KMRRRL6MXL',
    };

    const app = initializeApp(firebaseConfig);

    const analytics = getAnalytics(app);
  }
}
