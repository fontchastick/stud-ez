import { Component, OnInit, Injector } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { User } from '../services/user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'ons-page[allow]',
  templateUrl: './allow.component.html',
  styleUrls: ['./allow.component.scss', '../../w3.css']
})
export class AllowComponent implements OnInit {

  matricule: string ="";

  user= new User();

  search() {
    this.database.searchUser(this.matricule)
    .subscribe( x =>{
      this.user = x[0];
    })
  }

  openMenu() {
    this.inj.get(AppComponent).menu.nativeElement.open();
  }

  constructor(public database: DatabaseService, private inj: Injector) { }

  ngOnInit() {
  }

}
