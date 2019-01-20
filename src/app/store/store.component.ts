import { Component, OnInit, Injector } from '@angular/core';
import { AppComponent } from '../app.component';
import { UniversitiesServices } from '../services/universities.service';
import { DatabaseService } from '../services/database.service';
import { Course } from '../services/course';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'ons-page[store]',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss', '../../w3.css']
})
export class StoreComponent implements OnInit {

  public search = { level: null, spinneret: "", university: "" };

  public visible = true;

  courses;
  isSearching= false;

  public spinning = false;

  constructor(private inj: Injector, public univs: UniversitiesServices, public database: DatabaseService,
    public theme: ThemeService) {
    console.log(this.search)
   }
      openMenu() {
        this.inj.get(AppComponent).menu.nativeElement.open();
      }

      download(link) {
        window.open(link, '_system');
      }

      seek() {
        this.courses = new Array<Course>();
        let courseList = new Array<Course>();
    
   this.database.getCourses(this.search)
   .subscribe( x => {
     courseList = x;
    });
      this.spinning = true;
      this.isSearching = true;
    
      setTimeout(() => {
          for(let course of courseList)
          {
            if(course.level == this.search.level && course.spinneret == this.search.spinneret && course.university == this.search.university){
              this.courses.push(course);
            }
           
          }
      }, 1000);
     
      setTimeout(() => {
        this.spinning = false;
         console.log(this.courses);
         this.isSearching = false;
      }, 2000);
   
        }
  
  ngOnInit() {

    this.univs.onChange(this.database.user.university);
    this.search.university = this.database.user.university;
    this.search.spinneret = this.database.user.spinneret;
    this.search.level = this.database.user.level;

  }

}
