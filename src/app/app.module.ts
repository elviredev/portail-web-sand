import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ApplisComponent } from './applis/applis.component';
import { ContentsComponent } from './contents/contents.component';
import { LoginComponent } from './login/login.component';
import { AdminApplisComponent } from './admin/admin-applis/admin-applis.component';
import { AdminContentsComponent } from './admin/admin-contents/admin-contents.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplisComponent,
    ContentsComponent,
    LoginComponent,
    AdminApplisComponent,
    AdminContentsComponent,
    AdminUsersComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
