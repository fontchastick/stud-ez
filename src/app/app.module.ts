import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatSelectModule,
MatRadioModule, MatButtonModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { UniversitiesServices } from './services/universities.service';
import { DatabaseService } from './services/database.service';
import { FireloadService } from './services/fireload.service';
import { MessagesComponent } from './messages/messages.component';
import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './services/auth.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessagingService } from './messaging.service';
import { SendComponent } from './send/send.component';
import { AllowComponent } from './allow/allow.component';
import { ThemeService } from './services/theme.service';

const modules = [
  MatAutocompleteModule,
  MatProgressBarModule,
  MatInputModule, 
  MatFormFieldModule, 
  MatSelectModule,
  MatRadioModule,
  MatButtonModule,
  MatDialogModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    StoreComponent,
    ProfileComponent,
    SignUpComponent,
    SignInComponent,
    EditProfileComponent,
    SendComponent,
    AllowComponent
    ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    OnsenModule,
    modules,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],

  entryComponents: [
    MessagesComponent,
    StoreComponent,
    ProfileComponent,
    SignUpComponent,
    SignInComponent,
    EditProfileComponent, 
    SendComponent,
    AllowComponent
    ],

  providers: [
    UniversitiesServices, 
    DatabaseService, 
    FireloadService,
    AuthService,
    MessagingService,
    ThemeService
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
