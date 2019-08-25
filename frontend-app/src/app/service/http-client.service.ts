import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public role: string,
    public salary: number,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getEmployees() {
    let username='angular'
    let password='springboot'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Employee[]>(environment.apiUrl, {headers});
  }

  public deleteEmployee(employee) {
    let username='angular'
    let password='springboot'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.delete<Employee>(environment.apiUrl + '/' + employee.id, {headers});
  }

  public createEmployee(employee) {
    let username='angular'
    let password='springboot'

    return this.httpClient.post<Employee>(environment.apiUrl, employee);
  }
}
