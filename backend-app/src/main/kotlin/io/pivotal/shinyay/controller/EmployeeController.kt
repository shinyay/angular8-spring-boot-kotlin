package io.pivotal.shinyay.controller

import io.pivotal.shinyay.entity.Employee
import io.pivotal.shinyay.repository.EmployeeRepository
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["*"], allowedHeaders = ["*"])
@RequestMapping(value = ["/employees", "/"])
class EmployeeController(val employeeRepository: EmployeeRepository) {

    @GetMapping(produces = ["application/json"])
    fun employees(): MutableIterable<Employee> = employeeRepository.findAll()

    @PostMapping
    fun addEmployee(@RequestBody employee: Employee) = employeeRepository.save(employee)
}