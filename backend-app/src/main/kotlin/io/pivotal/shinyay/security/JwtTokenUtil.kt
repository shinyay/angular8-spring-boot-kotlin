package io.pivotal.shinyay.security

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class JwtTokenUtil(@Value("\${jwt.secret}") val jsonSecret: String) {
}