import { Injectable }          from '@angular/core';
import * as firebase from 'firebase';
import * as ons from 'onsenui';

import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class MessagingService {

  messaging = firebase.messaging()
  currentMessage = new BehaviorSubject(null)

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }


  updateToken(token, content) {
    this.afAuth.authState.subscribe(user => {
      if (!user) return;

      const data = { 
        token: token, 
        university: content.university,
        spinneret: content.spinneret,
        level: content.level 
      }
      this.afs.collection('fcmTokens').doc(token).set(data)
    })
  }

  getPermission(content) {
      this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken()
      })
      .then(token => {
        console.log(token)
        this.updateToken(token, content)
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }

    receiveMessage() {
       this.messaging.onMessage((payload) => {
        ons.notification.toast(payload.notification.body, {timeout: 2000});
        this.currentMessage.next(payload)
      });

    }
}