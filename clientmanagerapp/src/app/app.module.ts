import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersAddFormComponent } from './manage-users-add-form/manage-users-add-form.component';
import { ManageUsersEditFormComponent } from './manage-users-edit-form/manage-users-edit-form.component';
import { ManagePermissionsComponent } from './manage-permissions/manage-permissions.component';
import { ManagePermissionsAddFormComponent } from './manage-permissions-add-form/manage-permissions-add-form.component';
import { ManagePermissionsEditFormComponent } from './manage-permissions-edit-form/manage-permissions-edit-form.component';

const appRoutes: Routes = [
  { path:"home", component: LoginComponent },
  { path:"user", component: UserDashboardComponent },
  { path:"admin", component: AdminDashboardComponent },
  { path:"logout", component: LogoutComponent },
  { path:"manage-users", component: ManageUsersComponent},
  { path:"manage-user-add-form", component: ManageUsersAddFormComponent },
  { path:"manage-user-edit-form", component: ManageUsersEditFormComponent },
  { path:"manage-permissions", component: ManagePermissionsComponent },
  { path:"manage-permissions-add-form", component: ManagePermissionsAddFormComponent },
  { path:"manage-permissions-edit-form", component: ManagePermissionsEditFormComponent }
  //{ path:"**", component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    NotFoundComponent,
    NavbarComponent,
    LogoutComponent,
    FooterComponent,
    ManageUsersComponent,
    ManageUsersAddFormComponent,
    ManageUsersEditFormComponent,
    ManagePermissionsComponent,
    ManagePermissionsAddFormComponent,
    ManagePermissionsEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
