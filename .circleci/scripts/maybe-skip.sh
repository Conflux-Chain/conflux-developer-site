#!/usr/bin/env bash

set -e
set -u
set -o pipefail

skipCI=$(head -n 1 .skip-ci)

if [ "$skipCI" == 'true' ]
then
  circleci step halt
fi