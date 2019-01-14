import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ons-page[sign-in]',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../../w3.css']
})
export class SignInComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private auth: AuthService, private navigator: OnsNavigator) { }

  goToSignUp() {
    // Push SecontPageComponent to `ons-navigator
    this.navigator.element.pushPage(SignUpComponent);
  }

  signInWithEmail() {
    this.auth.signIn(this.email, this.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert("error "+ errorCode+ ": "+errorMessage)
      // ...
    });  
  }

  ngOnInit() {
  }

}
