import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';
import { User } from '../services/user';
import { UniversitiesServices } from '../services/universities.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'ons-page[sign-up]',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../../w3.css']
})
export class SignUpComponent implements OnInit {

  user=  {name: "", email: "", password: "", confirmPassword:"", uid: "", img: "../../assets/default-picture.png",
  matricule:"", university:"", spinneret:"", level:"", type:""};

  constructor(public auth: AuthService, public database: DatabaseService, public univs: UniversitiesServices,
    public theme: ThemeService) { }

  signUpWithEmail() {
    if(this.user.password != this.user.confirmPassword){
      alert("les deux mots de passe sont différents, veuillez réessayer.")
    }else if(this.user.password.length <5){
      alert("six caractères minimum.")
    }else{
      this.auth.signUp(this.user)
      .then( result => { 
        this.user.uid = result.user.uid;
          this.database.createUserProfile(this.user, result.user.uid);
          this.theme.getTheme(this.user.university);
          alert("Bienvenue dans Stud-ez! "+ this.theme.theme.message)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("error "+ errorCode+ ": "+errorMessage)
      }); 
    }
  }

  ngOnInit() {
  }

}
