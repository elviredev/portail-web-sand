import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { LoginComponent } from './login/login.component';
import { AdminApplisComponent } from './admin/admin-applis/admin-applis.component';
import { AdminContentsComponent } from './admin/admin-contents/admin-contents.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ContactComponent } from './contact/contact.component';
import { ApplisComponent } from './applis/applis.component';

const routes: Routes = [
  { path: 'applis', component: ApplisComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'contents/:urlContents', component: ContentsComponent },
  //{ path: 'contents/:p1', component: ContentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminApplis', component: AdminApplisComponent },
  { path: 'adminContents', component: AdminContentsComponent },
  { path: 'adminUsers', component: AdminUsersComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
