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
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManageRolesAddFormComponent } from './manage-roles-add-form/manage-roles-add-form.component';
import { ManageRolesEditFormComponent } from './manage-roles-edit-form/manage-roles-edit-form.component';
import { ManageTeamsComponent } from './manage-teams/manage-teams.component';
import { ManageTeamsAddFormComponent } from './manage-teams-add-form/manage-teams-add-form.component';
import { ManageTeamsEditFormComponent } from './manage-teams-edit-form/manage-teams-edit-form.component';
import { UserDashboardViewProfileComponent } from './user-dashboard-view-profile/user-dashboard-view-profile.component';
import { UserDashboardViewTeamsComponent } from './user-dashboard-view-teams/user-dashboard-view-teams.component';
import { UserDashboardEditProfileComponent } from './user-dashboard-edit-profile/user-dashboard-edit-profile.component';
import { UserDashboardViewTeamsDetailsComponent } from './user-dashboard-view-teams-details/user-dashboard-view-teams-details.component';
import { ManageTeamsViewMembersComponent } from './manage-teams-view-members/manage-teams-view-members.component';
import { ManageTeamsViewMembersAddComponent } from './manage-teams-view-members-add/manage-teams-view-members-add.component';

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
  { path:"manage-permissions-edit-form", component: ManagePermissionsEditFormComponent },
  { path:"manage-roles", component: ManageRolesComponent  },
  { path:"manage-roles-add-form", component: ManageRolesAddFormComponent  },
  { path:"manage-roles-edit-form", component: ManageRolesEditFormComponent},
  { path:"manage-teams", component: ManageTeamsComponent},
  { path:"manage-teams-add-form", component: ManageTeamsAddFormComponent},
  { path:"manage-teams-edit-form", component: ManageTeamsEditFormComponent},
  { path:"manage-teams-view-members", component: ManageTeamsViewMembersComponent},
  { path:"manage-teams-view-members-add", component: ManageTeamsViewMembersAddComponent},
  { path:"user-view-profile", component: UserDashboardViewProfileComponent},
  { path:"user-view-teams", component: UserDashboardViewTeamsComponent},
  { path:"user-edit-profile", component: UserDashboardEditProfileComponent},
  { path:"user-view-teams-details", component: UserDashboardViewTeamsDetailsComponent}
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
    ManagePermissionsEditFormComponent,
    ManageRolesComponent,
    ManageRolesAddFormComponent,
    ManageRolesEditFormComponent,
    ManageTeamsComponent,
    ManageTeamsAddFormComponent,
    ManageTeamsEditFormComponent,
    UserDashboardViewProfileComponent,
    UserDashboardViewTeamsComponent,
    UserDashboardEditProfileComponent,
    UserDashboardViewTeamsDetailsComponent,
    ManageTeamsViewMembersComponent,
    ManageTeamsViewMembersAddComponent
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
