package io.pivotal.shinyay.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Employee (
        @Id
        @GeneratedValue
        val id: String,
        val name: String,
        val role: String,
        val salary: Double
)