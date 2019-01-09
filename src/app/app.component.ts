import {Inject, OnInit } from '@angular/core';
import {Component, ViewChild, OnsNavigator, OnsSplitterSide} from 'ngx-onsenui';

import { DatabaseService } from './services/database.service';
import { MessagesComponent } from './messages/messages.component';
import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component';
import { FormGroup, FormControl } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './services/auth.service';
import { MessagingService } from './messaging.service';
import { SendComponent } from './send/send.component';
import { AllowComponent } from './allow/allow.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../w3.css']
})

export class AppComponent implements OnInit{
  @ViewChild('menu') public menu: OnsSplitterSide;
      @ViewChild('navi') private navi: OnsNavigator;
      messages = MessagesComponent;
      profile = ProfileComponent;
      store = StoreComponent;
      send = SendComponent;
      allow = AllowComponent;

      initialPage = SignInComponent;

      message;

      constructor(public auth: AuthService, public database: DatabaseService, private msgService: MessagingService){
        
      }

      logOff() {
        this.auth.logOut();
      }
      
      loadPage(page) {
        this.menu.nativeElement.close();
        this.navi.nativeElement.resetToPage(page, { animation: 'fade' });
      }

      

      ngOnInit() {
        this.auth.auth.user
        .subscribe( result => {
          this.auth.user = result;
          this.database.getUser(result.uid).subscribe(x => {
            this.database.user = x;
            this.msgService.getPermission(x);
          })
        });

        
        this.msgService.receiveMessage()
        this.msgService.currentMessage

      }
}
