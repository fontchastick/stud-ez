import { Component, OnInit, Injector } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { AppComponent } from '../app.component';
import { DatabaseService } from '../services/database.service';
import { AuthService } from '../services/auth.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { User } from '../services/user';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'ons-page[profile]',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _navigator: OnsNavigator, private inj: Injector, public database: DatabaseService,
     public auth: AuthService, private navigator: OnsNavigator,  public theme: ThemeService) { }
     
      openMenu() {
        this.inj.get(AppComponent).menu.nativeElement.open();
      }

      push() {
        // Push SecontPageComponent to `ons-navigator
        this.navigator.element.pushPage(EditProfileComponent);
      }

  ngOnInit() {

  }

}
