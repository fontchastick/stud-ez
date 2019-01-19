import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { User } from '../services/user';
import { UniversitiesServices } from '../services/universities.service';
import * as ons from 'onsenui';
import { OnsNavigator } from 'ngx-onsenui';
import { MessagingService } from '../messaging.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'ons-page[edit-profile]',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss', '../../w3.css']
})
export class EditProfileComponent implements OnInit {

  newUser = {matricule:"", university:"", spinneret:"", level:null}

  constructor(public database: DatabaseService, public univs: UniversitiesServices, private _navigator: OnsNavigator, 
    private msgService: MessagingService,  public theme: ThemeService) { }

  updateUser() {
    this.database.updateUser(this.newUser)
    .then( x => {
      ons.notification.alert("Compte modifié! \
      "  + this.theme.theme.message)
      this.msgService.getPermission(this.newUser);
      this._navigator.element.popPage();
    });
  }

  ngOnInit() {
   /* this.database.getUser()
    .subscribe(x => this.user = x)*/
    this.univs.onChange(this.database.user.university);
    this.newUser.matricule = this.database.user.matricule
    this.newUser.university = this.database.user.university;
    this.newUser.spinneret = this.database.user.spinneret;
    this.newUser.level = this.database.user.level;
  }

}
