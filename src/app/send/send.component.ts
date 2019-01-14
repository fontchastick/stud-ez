import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FireloadService } from '../services/fireload.service';
import { UniversitiesServices } from '../services/universities.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'ons-page[send]',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss', '../../w3.css']
})
export class SendComponent implements OnInit {

  file: File;

  document;

  announce;

  renewDoc() {
      this.document = new FormGroup({
      title: new FormControl(''),
      university: new FormControl(''),
      spinneret : new FormControl(''),
      level: new FormControl(''),
      subject: new FormControl(''),
      type: new FormControl(''),
      size: new FormControl(''),
      file: new FormControl(''),
      time: new FormControl(Date.now()),
      link: new FormControl('')
    });
  }

  renewAnnounce() {

    this.announce = new FormGroup({
    title: new FormControl(''),
    subTitle: new FormControl(''),
    university: new FormControl(''),
    image: new FormControl(''),
    time: new FormControl(Date.now()),
    text: new FormControl('')
    });
  }

  @ViewChild('segment') _segment: any;
          index= 0;

  constructor(public load: FireloadService, private inj: Injector, public univs: UniversitiesServices) { }

  openMenu() {
    this.inj.get(AppComponent).menu.nativeElement.open();
  }

  uploadFile(event) {
    this.file = event.target.files[0];
    this.document.value.size = this.file.size;
    this.document.value.title = this.file.name;
    }

  onSubmitCourse() {
      this.load.uploadCourse(this.document.value, this.file);
      this.load.percentage.subscribe(
        x => {
          if(x == 100){
            alert("téléchargement terminé!");
            this.renewDoc();
          }
        })
    }

  onSubmitAnnounce() {
    this.load.uploadAnnounce(this.announce.value, this.file);
    this.load.percentage.subscribe(
      x => {
        if(x == 100){
          alert("téléchargement terminé!");
          this.renewAnnounce();
        }
      })
  }

  ngOnInit() {
    this.renewDoc();
    this.renewAnnounce();
  }

}
