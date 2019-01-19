import { Component, OnInit, Injector, ViewChild} from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { AppComponent } from '../app.component';
import { DatabaseService } from '../services/database.service';
import { database } from 'firebase';
import { User } from '../services/user';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'ons-page[messages]',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss', '../../w3.css']
})

export class MessagesComponent implements OnInit {

  message={title: "", content: "", university: "", spinneret:  "", level:  null, time: Date.now()}
  messages: Observable<any[]>;
  announces: Observable<any[]>

  @ViewChild('segment') _segment: any;
          index= 0;

  constructor(private _navigator: OnsNavigator, private inj: Injector, public database: DatabaseService, 
    public auth: AuthService, public theme: ThemeService) {
   }

   sendMessage() {
      this.database.sendMessage(this.message)
      .then(x => {
        this.message.time = null;
        this.message.content = "";
        this.message.title = "";
      });
   }
      
      openMenu() {
        this.inj.get(AppComponent).menu.nativeElement.open();
      }

  ngOnInit() {
    this.auth.auth.user
    .subscribe( x => {
    this.database.getUser(x.uid)
        .subscribe(result => {

          this.database.user = result;

          //prépare l'envoi de messages
    this.message.university = result.university;
    this.message.spinneret = result.spinneret;
    this.message.level = result.level;

    this.messages = this.database.fetchClassMessages(this.database.user)
    this.announces = this.database.fetchAnnounces(this.database.user.university)
        })
        console.log(this.database.user);
        

      })
 
      }
  }
