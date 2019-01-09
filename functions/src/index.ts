import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);


exports.LocalMessageNotification = functions.firestore
    .document('{university}/{spinneret}/{level}/{messageId}')
    .onCreate(async (snap) => {
        
    const data = snap.data();

    const subscriber = data.subscriberId

    // Notification content
    const payload = {
      notification: {
          title: 'Message pour votre classe!',
          body: data.title,
          icon: 'https://goo.gl/Fz9nrQ',
          sound: 'default'
      }
    }

    // ref to the device collection for the user
    const db = admin.firestore()
    const devicesRef = db.collection('fcmTokens').where('university', '==', data.university)
                                               .where('spinneret', '==', data.spinneret)
                                               .where('level', '==', data.level)


    // get the user's tokens and send notifications
    const devices = await devicesRef.get();

    const tokens = [];

    // send a notification to each device token
    devices.forEach(result => {
      const token = result.data().token;

      tokens.push( token )
    })

    return admin.messaging().sendToDevice(tokens, payload)

});



















exports.AnnounceNotification = functions.firestore
    .document('Messages/{university}')
    .onCreate(async (snap) => {
        
    const data = snap.data();

    // Notification content
    const payload = {
      notification: {
          title: 'Votre faculté vous parle!',
          body: data.title,
          icon: 'https://goo.gl/Fz9nrQ',
          sound: 'default'
      }
    }

    // ref to the device collection for the user
    const db = admin.firestore()
    const devicesRef = db.collection('fcmTokens').where('university', '==', data.university)

    // get the user's tokens and send notifications
    const devices = await devicesRef.get();

    const tokens = [];

    // send a notification to each device token
    devices.forEach(result => {
      const token = result.data().token;

      tokens.push( token )
    })

    return admin.messaging().sendToDevice(tokens, payload)

});























exports.DocumentNotification = functions.firestore
    .document('Courses/{university}/{spinneret}/{level}')
    .onCreate(async (snap) => {
        
    const data = snap.data();

    const subscriber = data.subscriberId

    // Notification content
    const payload = {
      notification: {
          title: 'Nouveau Document disponible!',
          body: data.title,
          icon: 'https://goo.gl/Fz9nrQ',
          sound: 'default'
      }
    }

    // ref to the device collection for the user
    const db = admin.firestore()
    const devicesRef = db.collection('fcmTokens').where('university', '==', data.university)
                                               .where('spinneret', '==', data.spinneret)
                                               .where('level', '==', data.level)


    // get the user's tokens and send notifications
    const devices = await devicesRef.get();

    const tokens = [];

    // send a notification to each device token
    devices.forEach(result => {
      const token = result.data().token;

      tokens.push( token )
    })

    return admin.messaging().sendToDevice(tokens, payload)

});