#!/usr/bin/env bash

set -e
set -u

git fetch --all
git clean -xfd
git reset --hard origin/master
git submodule foreach --recursive git clean -xfd
git reset --hard
git submodule foreach --recursive git reset --hard
git submodule update --init --recursive
