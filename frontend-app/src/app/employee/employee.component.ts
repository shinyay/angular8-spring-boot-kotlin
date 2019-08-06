import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  employee: Employee = new Employee(0, "", "", 0)

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.employees = response;
  }

  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee).subscribe(data => {
      //    this.employees = this.employees.filter((emp: Employee) => {emp !== employee});
      this.employees = this.employees.filter(emp => emp !== employee);
    })
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.employee).subscribe(data => {
      alert("Employee created successfully.");
    })
  }

}
