#!/usr/bin/env fish

function run_docker
  argparse -n run_docker 'h/help' 'd/directory=' -- $argv
  or return 1

  if set -lq _flag_help
    echo "angular-cli.fish <COMMAND>"
    echo "angular-cli.fish -d/--directory <ENTRY DIRECTORY>"
    return
  end

  set -lq _flag_directory
  or set -l _flag_directory .

  docker run --rm -it -v (pwd)/$_flag_directory:/app shinyay/angular-cli $argv
end

run_docker $argv
