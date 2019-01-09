import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FireloadService {

    task: AngularFireUploadTask;

    public downloadState: string = "finished";

  // Progress monitoring
    percentage: Observable<number>;

    public registered;

  constructor(public afs: AngularFirestore, private storage: AngularFireStorage) {
   }

  uploadCourse(document, file) {

    this.downloadState = "started";

    this.task = this.storage.upload(`${document.title} ${document.time.toString()}`, file)
    this.task.then(
        x => { this.downloadState = "finished"
            x.ref.getDownloadURL().then( y => {
            document.link = y;
            const itemsRef = this.afs.collection(`Courses/${document.university}/${document.spinneret}`);
            itemsRef.add(document);
        })
            //: if request.auth != null;
        }
    );
    this.percentage = this.task.percentageChanges();  
  }

  uploadAnnounce(message, image) {
    this.task = this.storage.upload(`${message.title} ${message.time.toString()}`, image)

    this.task.then(
        x => { this.downloadState = "finished"
            x.ref.getDownloadURL().then( y => {
            message.image = y;
            const itemsRef = this.afs.collection('Messages/'+ message.university + '/news');
            itemsRef.add(message);
        })
            //: if request.auth != null;
        }
    );
    this.percentage = this.task.percentageChanges();  
  }

}