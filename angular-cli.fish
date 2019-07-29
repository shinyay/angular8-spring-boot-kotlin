#!/usr/bin/env fish

function run_docker
  argparse -n run_docker 'h/help' -- $argv
  or return 1

  if set -lq _flag_help
    echo "angular-cli.fish <COMMAND>"
    return
  end
  docker run --rm -it -v (pwd):/app shinyay/angular-cli $argv
end

run_docker $argv
