#!/usr/bin/env bash
set -x

# TODO cache fd at /usr/bin/fd
cd /tmp/
wget https://github.com/sharkdp/fd/releases/download/v7.4.0/fd_7.4.0_amd64.deb
dpkg -i /tmp/fd_7.4.0_amd64.deb
apt-get install fd-find -y || true
