# Angular 8 Frontend for SpringBoot Backedn

App to App on PCF

## Description

- [shinyay/angular-cli](https://cloud.docker.com/repository/docker/shinyay/angular-cli)

## Demo

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

### Create Component
#### Employee Component
```
$ ng generate component employee
```

## Installation

## Licence

Released under the [MIT license](https://gist.githubusercontent.com/shinyay/56e54ee4c0e22db8211e05e70a63247e/raw/44f0f4de510b4f2b918fad3c91e0845104092bff/LICENSE)

## Author

[shinyay](https://github.com/shinyay)
