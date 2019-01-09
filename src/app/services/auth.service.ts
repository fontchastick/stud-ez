import { Injectable } from "@angular/core";
import { User } from "./user";

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from "firebase";


@Injectable()
export class AuthService {

    public user;
    authState= "none";

    constructor(public auth: AngularFireAuth) {
        auth.user.subscribe(x => {
            if(x)this.authState ="true"
            else this.authState = "false"
            console.log(x)
        })
           
    }

    signIn(email, password):Promise<any>{
        return this.auth.auth.signInWithEmailAndPassword(email, password)    
    }

    signUp(user): Promise<any> {
           return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
    }

    logOut() {
        this.auth.auth.signOut()
    }

}