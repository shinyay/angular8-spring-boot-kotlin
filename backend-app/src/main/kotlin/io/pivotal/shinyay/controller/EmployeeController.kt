package io.pivotal.shinyay.controller

import io.pivotal.shinyay.entity.Employee
import io.pivotal.shinyay.repository.EmployeeRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["*"], allowedHeaders = ["*"])
class EmployeeController(val employeeRepository: EmployeeRepository) {

    @GetMapping(value = ["/employees", "/"])
    fun employees(): MutableIterable<Employee> = employeeRepository.findAll()
}