package io.pivotal.shinyay.controller

import io.pivotal.shinyay.entity.Employee
import io.pivotal.shinyay.repository.EmployeeRepository
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["*"], allowedHeaders = ["*"])
class EmployeeController(val employeeRepository: EmployeeRepository) {

    @GetMapping(value = ["/employees", "/"])
    fun employees(): MutableIterable<Employee> = employeeRepository.findAll()

    @PostMapping(value = "/employees")
    fun addEmployee(@RequestBody val employee: Employee) = employeeRepository.save(employee)
}