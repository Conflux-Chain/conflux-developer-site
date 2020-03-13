#!/usr/bin/env bash

set -e
set -u

git diff --no-color --submodule=diff origin/master | grep -E '^(---|\+\+\+)\ (a|b).*\.md[x]?$'