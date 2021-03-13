#!/usr/bin/env sh
vant-cli build-site

superman-cdn /quickact ./site/*.js

rm -rf site/*.js

gh-pages -d site --add
