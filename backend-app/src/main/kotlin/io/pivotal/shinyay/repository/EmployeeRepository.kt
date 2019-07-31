package io.pivotal.shinyay.repository

import io.pivotal.shinyay.entity.Employee
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface EmployeeRepository : CrudRepository<Employee, Long> {}