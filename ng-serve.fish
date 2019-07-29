#!/usr/bin/env fish

if count $argv > /dev/null
  docker run --rm -it -v (pwd)/$argv[1]:/app -p 4200:4200 shinyay/angular-cli ng serve --host 0.0.0.0 --poll=2000
else
  echo "ng-serve.fish <APP_DIR>"
end

