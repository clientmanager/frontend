import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageUsersAddFormComponent } from './components/manage-users-add-form/manage-users-add-form.component';
import { ManageUsersEditFormComponent } from './components/manage-users-edit-form/manage-users-edit-form.component';
import { ManagePermissionsComponent } from './components/manage-permissions/manage-permissions.component';
import { ManagePermissionsAddFormComponent } from './components/manage-permissions-add-form/manage-permissions-add-form.component';
import { ManagePermissionsEditFormComponent } from './components/manage-permissions-edit-form/manage-permissions-edit-form.component';
import { ManageRolesComponent } from './components/manage-roles/manage-roles.component';
import { ManageRolesAddFormComponent } from './components/manage-roles-add-form/manage-roles-add-form.component';
import { ManageRolesEditFormComponent } from './components/manage-roles-edit-form/manage-roles-edit-form.component';
import { ManageTeamsComponent } from './components/manage-teams/manage-teams.component';
import { ManageTeamsAddFormComponent } from './components/manage-teams-add-form/manage-teams-add-form.component';
import { ManageTeamsEditFormComponent } from './components/manage-teams-edit-form/manage-teams-edit-form.component';
import { UserDashboardViewProfileComponent } from './components/user-dashboard-view-profile/user-dashboard-view-profile.component';
import { UserDashboardViewTeamsComponent } from './components/user-dashboard-view-teams/user-dashboard-view-teams.component';
import { UserDashboardEditProfileComponent } from './components/user-dashboard-edit-profile/user-dashboard-edit-profile.component';
import { UserDashboardViewTeamsDetailsComponent } from './components/user-dashboard-view-teams-details/user-dashboard-view-teams-details.component';
import { ManageTeamsViewMembersComponent } from './components/manage-teams-view-members/manage-teams-view-members.component';
import { ManageTeamsViewMembersAddComponent } from './components/manage-teams-view-members-add/manage-teams-view-members-add.component';
import { AdminService } from './services/admin.service';
import { ManageRolesViewPermissionsComponent } from './components/manage-roles-view-permissions/manage-roles-view-permissions.component';
import { ManageTeamsViewPermissionsComponent } from './components/manage-teams-view-permissions/manage-teams-view-permissions.component';

const appRoutes: Routes = [
  { path:"home", component: LoginComponent },
  { path:"user", component: UserDashboardComponent },
  { path:"admin", component: AdminDashboardComponent },
  { path:"logout", component: LogoutComponent },
  { path: "login", component: LoginComponent},
  { path:"manage-users", component: ManageUsersComponent},
  { path:"manage-user-add-form", component: ManageUsersAddFormComponent },
  { path:"manage-user-edit-form", component: ManageUsersEditFormComponent },
  { path:"manage-permissions", component: ManagePermissionsComponent },
  { path:"manage-permissions-add-form", component: ManagePermissionsAddFormComponent },
  { path:"manage-permissions-edit-form", component: ManagePermissionsEditFormComponent },
  { path:"manage-roles", component: ManageRolesComponent  },
  { path:"manage-roles-add-form", component: ManageRolesAddFormComponent  },
  { path:"manage-roles-edit-form", component: ManageRolesEditFormComponent},
  { path:"manage-roles-view-permissions", component: ManageRolesViewPermissionsComponent },
  { path:"manage-teams", component: ManageTeamsComponent},
  { path:"manage-teams-add-form", component: ManageTeamsAddFormComponent},
  { path:"manage-teams-edit-form", component: ManageTeamsEditFormComponent},
  { path:"manage-teams-view-members", component: ManageTeamsViewMembersComponent},
  { path:"manage-teams-view-members-add", component: ManageTeamsViewMembersAddComponent},
  { path:"manage-teams-view-permissions", component: ManageTeamsViewPermissionsComponent},
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
    ManageTeamsViewMembersAddComponent,
    ManageRolesViewPermissionsComponent,
    ManageTeamsViewPermissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
