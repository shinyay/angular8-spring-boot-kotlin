import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
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

    return this.httpClient.get<Employee[]>(environment.apiUrl);
  }

  public deleteEmployee(employee) {
    let username='angular'
    let password='springboot'

    return this.httpClient.delete<Employee>(environment.apiUrl + '/' + employee.id);
  }

  public createEmployee(employee) {
    let username='angular'
    let password='springboot'

    return this.httpClient.post<Employee>(environment.apiUrl, employee);
  }
}
