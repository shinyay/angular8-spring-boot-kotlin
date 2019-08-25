import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

export class User{
  constructor(public status:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // [Hardcoded Credentials\
  // authenticate(username, password) {
  //   if (username === "angular" && password === "springboot") {
  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  authenticate(username, password) {
    console.log(username);
    console.log(password)
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get<User>(environment.apiUrl + '/validate', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}