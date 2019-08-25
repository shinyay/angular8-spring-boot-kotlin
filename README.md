# Angular 8 Frontend for SpringBoot Backend

App to App on PCF

## Description

- [shinyay/angular-cli](https://cloud.docker.com/repository/docker/shinyay/angular-cli)

### Tags
- [for-local-without-css](https://github.com/shinyay/angular8-spring-boot-kotlin/tree/for-local-without-css)
- [for-pws-without-css](https://github.com/shinyay/angular8-spring-boot-kotlin/tree/for-pws-without-css)
- [for-pws-with-css](https://github.com/shinyay/angular8-spring-boot-kotlin/tree/for-pws-with-css)
- [for-local-with-register-and-delete](https://github.com/shinyay/angular8-spring-boot-kotlin/tree/for-local-with-register-and-delete)
- [angular-login-authentication](https://github.com/shinyay/angular8-spring-boot-kotlin/tree/angular-login-authentication)
  - Simple Authentication with hardcoded id/pwd in Angular code
- [spring-security-with-each-authentication](https://github.com/shinyay/angular8-spring-boot-kotlin/tree/spring-security-with-each-authentication)

## Demo

### 1. Run Backend MySQL
```
$ cd backend-app/db/docker-mysql
$ docker-compose up -d
```

### 2. Run Backend Service
```
$ cd backend-app
$ ./gradlew clean bootRun
```

### 3. Frontend Application
'''
$ docker run --rm -it --name my-frontend -v (pwd)/frontend-app:/app -p 4200:4200 shinyay/angular-cli ng serve --host 0.0.0.0 --poll=2000
'''

## Features

### Tags

- for-local-without-css
  - Frontend with Local Address and Port for Local SpringBoot
  - MySQL in Docker Container
- for-pws-without-css
  - Frontend with PWS Domain for SpringBoot on PWS
- for-pws-with-css
  - Frontend with Bootstrap with PWS Domain for SpringBoot on PWS

## Requirement

- [Java JWT: JSON Web Token for Java and Android](https://github.com/jwtk/jjwt)

## Usage
### Create Docker Images
```
$ docker build -t shinyay/angular-cli .
```
### Create Project
```
$ docker run --rm -it -v (pwd):/app shinyay/angular-cli ng new my-app
```

#### Fix vulnerbility
```
$ docker run --rm -it -v (pwd):/app shinyay/angular-cli npm audit fix
```

#### Show vulnerbility details
```
$ docker run --rm -it -v (pwd):/app shinyay/angular-cli npm audit
```

### Start Server
```
$ docker run --rm -it -v (pwd):/app -p 4200:4200 shinyay/angular-cli ng serve --host 0.0.0.0 --poll=2000
```

### Create Components / Services
#### Employee Component
```
$ ng generate component employee
```

#### HttpClient Service
```
$ ng generate service service/httpClient
```

##### New Employee Component
```
$ ng generate component new-employee
```

##### Header Component
```
$ ng generate component header
```

##### Footer Component
```
$ ng generate component footer
```

#### Authentication Service
```
$ ng generate service service/authentication
```

#### Login Component
```
$ ./angular-cli.fish --directory frontend-app ng generate component login
```
or
```
$ ng generate component login
```

#### Logout Component
```
$ ./angular-cli.fish --directory frontend-app ng generate component logout
```
or
```
$ ng generate component logout
```

#### AuthGuard Service
```
$ ./angular-cli.fish --directory frontend-app ng generate service service/authGuard
```
or
```
$ ng generate service service/authGuard
```

#### Basic Authentication Http Interceptor Service
```
$ ./angular-cli.fish --directory frontend-app ng generate service service/BasicAuthHtppInterceptorService
```
or
```
$ ng generate service service/BasicAuthHtppInterceptorService
```


## Installation

## Licence

Released under the [MIT license](https://gist.githubusercontent.com/shinyay/56e54ee4c0e22db8211e05e70a63247e/raw/44f0f4de510b4f2b918fad3c91e0845104092bff/LICENSE)

## Author

[shinyay](https://github.com/shinyay)
