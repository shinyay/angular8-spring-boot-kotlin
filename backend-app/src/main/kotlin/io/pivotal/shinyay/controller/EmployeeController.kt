package io.pivotal.shinyay.controller

import io.pivotal.shinyay.entity.Employee
import io.pivotal.shinyay.entity.User
import io.pivotal.shinyay.repository.EmployeeRepository
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["*"], allowedHeaders = ["*"])
@RequestMapping(value = ["/employees", "/"])
class EmployeeController(val employeeRepository: EmployeeRepository) {

    @GetMapping("/validate")
    fun validateLogin(): User = User("Successfully Authenticated")

    @GetMapping(produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun employees(): MutableIterable<Employee> = employeeRepository.findAll()

    @PostMapping
    fun addEmployee(@RequestBody employee: Employee) = employeeRepository.save(employee)

    @DeleteMapping(value = ["/{id}"])
    fun deleteEmployee(@PathVariable(name = "id") id: String) = employeeRepository.deleteById(id.toLong())

    @GetMapping(value = ["/init"])
    fun initData() {
        val employee1: Employee = Employee(1, "Foo", "Student", 100.0)
        val employee2: Employee = Employee(2, "Bar", "Teacher", 1000.0)
        employeeRepository.save(employee1)
        employeeRepository.save(employee2)
    }
}