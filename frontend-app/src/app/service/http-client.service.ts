import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
//    return this.httpClient.get<Employee[]>('https://backend-service-demo.cfapps.io');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>('http://localhost:8080/employees/' + employee.id);
}
