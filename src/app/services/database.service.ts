import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Announce } from './announce';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from './auth.service';
import { User } from './user';

@Injectable()
export class DatabaseService {
    user= new User();

  itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;


  usersDoc: AngularFirestoreDocument<any>;

constructor(private afs: AngularFirestore, private auth: AuthService) {
 
  }

sendMessage(message) : Promise<any>{
    message.time = Date.now();
    const devicesRef = this.afs.collection(`${message.university}/${message.spinneret}/${message.level}`)
    return devicesRef.add(message)
}

fetchClassMessages(user): Observable<any[]> {
    let  itemDocu: AngularFirestoreCollection<any[]>;
    itemDocu = this.afs.collection<any>(`${user.university}/${user.spinneret}/${user.level}`);
    return itemDocu.valueChanges()
}

fetchAnnounces(university): Observable<any[]> {
    let  itemDocu: AngularFirestoreCollection<any[]>;
    itemDocu = this.afs.collection<any>(`Messages/${university}/news`);
    return itemDocu.valueChanges()
}

getUser(uid): Observable<any> {
    this.itemDoc = this.afs.doc<any>(`Users/${uid}`);
    return this.itemDoc.valueChanges()
}

updateUser(newUser): Promise<any> {
    let itemDocu = this.afs.doc<any>(`Users/${this.auth.user.uid}`);
    return itemDocu.update(newUser)
}

createUserProfile(user, uid) {
    const devicesRef = this.afs.collection('Users')
    return devicesRef.doc(uid).set(user)
}

//courses part

getCourses(search):  Observable<any[]>{
    let  itemDocu: AngularFirestoreCollection<any[]>;
    itemDocu = this.afs.collection<any>(`Courses/${search.university}/${search.spinneret}`);
    return itemDocu.valueChanges()
}

//allow part

allow(newUser){
    let itemDocu = this.afs.doc<any>(`Users/${newUser.uid}`);
    if(newUser.type == 'head') itemDocu.update({type: ''})
    else itemDocu.update({type: 'head'})

}

searchUser(matricule): Observable<any> {
    return this.afs.collection('Users', ref => ref.where('matricule', '==', matricule)).valueChanges()
}

}