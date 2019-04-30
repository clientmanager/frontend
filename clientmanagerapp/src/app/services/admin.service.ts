import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../sharedclasses/user';
import { Permission } from '../sharedclasses/permission';
import { Role } from '../sharedclasses/role';
import { Team } from '../sharedclasses/team';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private user = new User();
  private permission = new Permission();
  private role = new Role();
  private team = new Team();

  constructor(private _httpService: HttpClient) { }

  /********************
    USERS
  *********************/

  userSetter(user: User){
    this.user = user;
  }

  userGetter(){
    return this.user;
  }

  getAllUsers(): Observable<User[]>{
    return this._httpService.get<User[]>("http://localhost:9000/user");
  }

  createUser(user: User){
    let body = JSON.stringify(user);
    //let headers = new HttpHeaders
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    //let options = new RequestOptions
    return this._httpService.post("http://localhost:9000/user", body, httpOptions); 
  }

  updateUser(user: User){
    let body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._httpService.put("http://localhost:9000/user", body, httpOptions); 
  }

  deleteUser(user_id: Number){
    return this._httpService.delete("http://localhost:9000/user/" + user_id);
  }

  /********************
    PERMISSIONS
  *********************/
  permissionSetter(permission: Permission){
    this.permission = permission;
  }

  permissionGetter(){
    return this.permission;
  }

  getAllPermissions(): Observable<Permission[]>{
    return this._httpService.get<Permission[]>("http://localhost:9000/permission");
  }

  createPermission(permission: Permission){
    let body = JSON.stringify(permission);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._httpService.post("http://localhost:9000/permission", body, httpOptions); 
  }

  updatePermission(permission: Permission){
    let body = JSON.stringify(permission);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._httpService.post("http://localhost:9000/permission", body, httpOptions);
  }

  deletePermission(permission_id: Number){
    return this._httpService.delete("http://localhost:9000/permission/" + permission_id);
  }

  /********************
    Roles
  *********************/
  roleSetter(role: Role){
    this.role = role;
  }

  roleGetter(){
    return this.role;
  }

  addRolePermission(role_id: Number, permission_id: Number){
    let body = JSON.stringify("");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._httpService.post("http://localhost:9000/role/" + role_id +"/" + permission_id, body, httpOptions);
  }

  removeRolePermission(role_id: Number, permission_id: Number){
    let body = JSON.stringify("");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._httpService.post("http://localhost:9000/role/removepermission/" + role_id +"/" + permission_id, body, httpOptions);
  }

  getAllroles(): Observable<Role[]>{
    return this._httpService.get<Role[]>("http://localhost:9000/role");
  }

  createRole(role: Role){
    let body = JSON.stringify(role);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._httpService.post("http://localhost:9000/role", body, httpOptions); 
  }

  updateRole(role: Role){
    let body = JSON.stringify(role);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._httpService.put("http://localhost:9000/role", body, httpOptions);
  }

  deleteRole(role_id: Number){
    return this._httpService.delete("http://localhost:9000/role/" + role_id);
  }

/********************
  Teams
*********************/
teamSetter(team: Team){
  this.team = team;
}

teamGetter(){
  return this.team;
}

addTeamPermission(team_id: Number, permission_id: Number){
  let body = JSON.stringify("");
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  return this._httpService.post("http://localhost:9000/team/" + team_id +"/" + permission_id, body, httpOptions);
}

removeTeamPermission(team_id: Number, permission_id: Number){
  let body = JSON.stringify("");
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  return this._httpService.post("http://localhost:9000/team/removepermission/" + team_id +"/" + permission_id, body, httpOptions);
}

getAllTeams(): Observable<Team[]>{
  return this._httpService.get<Team[]>("http://localhost:9000/team");
}

createTeam(team: Team){
  let body = JSON.stringify(team);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  return this._httpService.post("http://localhost:9000/team", body, httpOptions); 
}

updateTeam(team: Team){
  let body = JSON.stringify(team);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  return this._httpService.put("http://localhost:9000/team", body, httpOptions);
}

deleteTeam(team_id: Number){
  return this._httpService.delete("http://localhost:9000/team/" + team_id);
}
}
